const { METHODS } = require('../constants')

/**
 * Returns information about a transaction by block number and transaction index position.
 *
 * @example query { getTransactionByBlockNumberAndIndex(params:["0x29c", "0x0"]) }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_gettransactionbyblocknumberandindex
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Array}  args.params            RPC request parameters
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {Object}
 */
const getTransactionByBlockNumberAndIndex = async (
  _,
  { params },
  { makeRPCRequest }
) => {
  try {
    const rpc = await makeRPCRequest(
      METHODS.eth.getTransactionByBlockNumberAndIndex,
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

module.exports = getTransactionByBlockNumberAndIndex
