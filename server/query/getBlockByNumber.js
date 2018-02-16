const { METHODS } = require('../constants')

/**
 * Returns information about a block by block number.
 *
 * @example query { getBlockByNumber(params:["latest"]) }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getblockbynumber
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Array}  args.params            RPC request parameters
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {Object}
 */
const getBlockByNumber = async (_, { params }, { makeRPCRequest }) => {
  try {
    const rpc = await makeRPCRequest(METHODS.eth.getBlockByNumber, [
      ...params,
      true,
    ])

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = getBlockByNumber
