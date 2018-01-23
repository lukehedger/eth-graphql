const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns the number of transactions sent from an address.
 *
 * @example query { getTransactionCount(params:["0x..."]) }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_gettransactioncount
 *
 * @param  {Object} _           Parent resolver context
 * @param  {Object} args        Query arguments
 * @param  {Array}  args.params RPC request parameters
 * @return {String}
 */
const getTransactionCount = async (_, { params }) => {
  try {
    const rpc = await makeRPCRequest(
      RPC_ENDPOINT,
      METHODS.eth.getTransactionCount,
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

module.exports = getTransactionCount
