const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns if client is actively listening for network connections.
 *
 * @example query { listening }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#net_listening
 *
 * @return {Boolean}
 */
const listening = async () => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.net.listening)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = listening
