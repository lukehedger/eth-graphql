const { METHODS } = require('../constants')

/**
 * Returns the number of hashes per second that the node is mining with.
 *
 * @example query { hashrate }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_hashrate
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {String}
 */
const hashrate = async (_, args, { makeRPCRequest }) => {
  try {
    const rpc = await makeRPCRequest(METHODS.eth.hashrate)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = hashrate
