const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns information about a block by block number.
 *
 * @example query { getBlockByNumber(params:["latest"]) }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getblockbynumber
 *
 * @param  {Object} _           Parent resolver context
 * @param  {Object} args        Query arguments
 * @param  {Array}  args.params RPC request parameters
 * @return {Object}
 */
const getBlockByNumber = async (_, { params }) => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.eth.getBlockByNumber, [...params, true])

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = getBlockByNumber
