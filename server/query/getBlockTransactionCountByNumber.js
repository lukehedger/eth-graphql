const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns the number of transactions in a block matching the given block number.
 *
 * @example query { getBlockTransactionCountByNumber(params:["0x..."]) }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getBlockTransactionCountByNumber
 *
 * @param  {Object} _           Parent resolver context
 * @param  {Object} args        Query arguments
 * @param  {Array}  args.params RPC request parameters
 * @return {String}
 */
const getBlockTransactionCountByNumber = async (_, { params }) => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.eth.getBlockTransactionCountByNumber, params)

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = getBlockTransactionCountByNumber
