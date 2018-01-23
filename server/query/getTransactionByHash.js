const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns information about a transaction requested by transaction hash.
 *
 * @example query { getTransactionByHash(params:["0x..."]) }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_gettransactionbyhash
 *
 * @param  {Object} _           Parent resolver context
 * @param  {Object} args        Query arguments
 * @param  {Array}  args.params RPC request parameters
 * @return {Object}
 */
const getTransactionByHash = async (_, { params }) => {
  try {
    const rpc = await makeRPCRequest(
      RPC_ENDPOINT,
      METHODS.eth.getTransactionByHash,
      [...params, true]
    )

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = getTransactionByHash
