const { METHODS } = require('../constants')

/**
 * Returns information about a transaction by block hash and transaction index position.
 *
 * @example query { getTransactionByBlockHashAndIndex(params:["0x...", "0x0"]) }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_gettransactionbyblockhashandindex
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Array}  args.params            RPC request parameters
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {Object}
 */
const getTransactionByBlockHashAndIndex = async (
  _,
  { params },
  { makeRPCRequest }
) => {
  try {
    const rpc = await makeRPCRequest(
      METHODS.eth.getTransactionByBlockHashAndIndex,
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

module.exports = getTransactionByBlockHashAndIndex
