const fetch = require('node-fetch')

/**
 * Construct RPC HTTP request
 *
 * @param  {String} endpoint RPC endpoint
 * @param  {String} method   RPC method
 * @param  {Array}  params   RPC parameters
 * @return {Object}          RPC response body
 */
const makeRPCRequest = (endpoint, method, params = []) => {
  return fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: method,
      params: params,
      id: 1,
    }),
  }).then(res => res.json())
}

module.exports = makeRPCRequest
