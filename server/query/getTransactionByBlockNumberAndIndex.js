const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns information about a transaction by block number and transaction index position.
 *
 * @example query { getTransactionByBlockNumberAndIndex(params:["0x29c", "0x0"]) }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_gettransactionbyblocknumberandindex
 *
 * @param  {Object} _           Parent resolver context
 * @param  {Object} args        Query arguments
 * @param  {Array}  args.params RPC request parameters
 * @return {Object}
 */
const getTransactionByBlockNumberAndIndex = async (_, { params }) => {
  try {
    const rpc = await makeRPCRequest(
      RPC_ENDPOINT,
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
