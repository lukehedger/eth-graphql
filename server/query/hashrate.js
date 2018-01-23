const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns the number of hashes per second that the node is mining with.
 *
 * @example query { hashrate }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_hashrate
 *
 * @return {String}
 */
const hashrate = async () => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.eth.hashrate)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = hashrate
