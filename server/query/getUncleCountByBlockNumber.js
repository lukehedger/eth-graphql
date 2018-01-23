const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns the number of uncles in a block from a block matching the given block number.
 *
 * @example query { getUncleCountByBlockNumber(params:["latest"]) }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getUncleCountByBlockNumber
 *
 * @param  {Object} _           Parent resolver context
 * @param  {Object} args        Query arguments
 * @param  {Array}  args.params RPC request parameters
 * @return {String}
 */
const getUncleCountByBlockNumber = async (_, { params }) => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.eth.getUncleCountByBlockNumber, params)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = getUncleCountByBlockNumber
