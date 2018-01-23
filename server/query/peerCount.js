const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns the current network id.
 *
 * @example query { peerCount }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#net_peerCount
 *
 * @return {String}
 */
const peerCount = async () => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.net.peerCount)

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = peerCount
