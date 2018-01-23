const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns the number of uncles in a block from a block matching the given block hash.
 *
 * @example query { getUncleCountByBlockHash(params:["0x..."]) }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getUncleCountByBlockHash
 *
 * @param  {Object} _           Parent resolver context
 * @param  {Object} args        Query arguments
 * @param  {Array}  args.params RPC request parameters
 * @return {String}
 */
const getUncleCountByBlockHash = async (_, { params }) => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.eth.getUncleCountByBlockHash, params)

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = getUncleCountByBlockHash
