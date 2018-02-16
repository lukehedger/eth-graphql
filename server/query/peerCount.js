const { METHODS } = require('../constants')

/**
 * Returns number of peers currently connected to the client.
 *
 * @example query { peerCount }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#net_peercount
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {String}
 */
const peerCount = async (_, args, { makeRPCRequest }) => {
  try {
    const rpc = await makeRPCRequest(METHODS.net.peerCount)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = peerCount
