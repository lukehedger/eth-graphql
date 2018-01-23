const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns the current ethereum protocol version.
 *
 * @example query { protocolVersion }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_protocolversion
 *
 * @return {String}
 */
const protocolVersion = async () => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.eth.protocolVersion)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = protocolVersion
