const { METHODS } = require('../constants')

/**
 * Returns the number of transactions in a block matching the given block number.
 *
 * @example query { getBlockTransactionCountByNumber(params:["0x..."]) }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getblocktransactioncountbynumber
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Array}  args.params            RPC request parameters
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {String}
 */
const getBlockTransactionCountByNumber = async (
  _,
  { params },
  { makeRPCRequest }
) => {
  try {
    const rpc = await makeRPCRequest(
      METHODS.eth.getBlockTransactionCountByNumber,
      params
    )

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = getBlockTransactionCountByNumber
