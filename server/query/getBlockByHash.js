const { METHODS } = require('../constants')

/**
 * Returns information about a block by block hash.
 *
 * @example query { getBlockByHash(params:["0x..."]) }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getblockbyhash
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Array}  args.params            RPC request parameters
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {Object}
 */
const getBlockByHash = async (_, { params }, { makeRPCRequest }) => {
  try {
    const rpc = await makeRPCRequest(METHODS.eth.getBlockByHash, [
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

module.exports = getBlockByHash
