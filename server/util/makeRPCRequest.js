const fetch = require('node-fetch')
const getURLProtocol = require('./getURLProtocol')
const makeWebSocketConnection = require('./makeWebSocketConnection')

/**
 * Generate RPC request data
 *
 * @param  {String} method RPC method
 * @param  {Array}  params RPC parameters
 * @param  {Number} [id=1] RPC request ID
 * @return {String}        Stringified request data
 */
const getRPCRequestBody = (method, params, id = 1) => {
  return JSON.stringify({
    jsonrpc: '2.0',
    method: method,
    params: params,
    id: id,
  })
}

/**
 * Send RPC request over HTTP
 *
 * @param  {String} endpoint RPC endpoint
 * @param  {String} method   RPC method
 * @param  {Array}  params   RPC parameters
 * @return {Object}          RPC response body
 */
const httpRPCRequest = endpoint => (method, params) => {
  return fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: getRPCRequestBody(method, params),
  }).then(res => res.json())
}

/**
 * Send RPC request over WebSocket
 *
 * @param  {Object} ws           RPC WebSocket connection
 * @param  {Object} eventEmitter Node.js EventEmitter
 * @param  {String} method       RPC method
 * @param  {Array}  params       RPC parameters
 * @return {Object}              RPC response body
 */
const wsRPCRequest = (ws, eventEmitter) => (method, params) => {
  return new Promise((resolve, reject) => {
    const id = new Date().getTime()

    // send message
    ws.send(getRPCRequestBody(method, params, id))

    // on error callback
    const onError = error => reject({ error })

    // on message callback
    const onMessage = result => {
      eventEmitter.removeListener('error', onError)

      return resolve({ result })
    }

    // listen for error
    eventEmitter.once('error', onError)

    // listen for result
    eventEmitter.once(id, onMessage)
  })
}

/**
 * Construct RPC request
 *
 * @param  {String} endpoint     RPC endpoint
 * @param  {Object} eventEmitter Node.js EventEmitter
 * @return {Object}              RPC response body
 */
const makeRPCRequest = (endpoint, eventEmitter) => {
  const protocol = getURLProtocol(endpoint)

  let rpcRequest

  switch (protocol) {
    case 'ws:':
      rpcRequest = wsRPCRequest(
        makeWebSocketConnection(endpoint, eventEmitter),
        eventEmitter
      )
      break
    case 'http:':
    case 'https:':
      rpcRequest = httpRPCRequest(endpoint)
      break
  }

  return rpcRequest
}

module.exports = makeRPCRequest
