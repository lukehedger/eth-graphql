const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns number of peers currently connected to the client.
 *
 * @example query { peerCount }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#net_peercount
 *
 * @return {String}
 */
const peerCount = async () => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.net.peerCount)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = peerCount
