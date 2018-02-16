const WebSocket = require('ws')

/**
 * Connect to WebSocket
 *
 * @param  {String} address      WebSocket server address
 * @param  {Object} eventEmitter Node.js EventEmitter
 * @return {Object}              WebSocket connection
 */
const makeWebSocketConnection = (address, eventEmitter) => {
  const ws = new WebSocket(address)

  ws.on('error', error => {
    return eventEmitter.emit('error', error)
  })

  ws.on('message', data => {
    const response = JSON.parse(data)

    return eventEmitter.emit(response.id, response.result)
  })

  return ws
}

module.exports = makeWebSocketConnection
