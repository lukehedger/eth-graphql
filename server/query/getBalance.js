const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns the balance of the account of given address.
 *
 * @example query { getBalance }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getbalance
 *
 * @param  {Object} _           Parent resolver context
 * @param  {Object} args        Query arguments
 * @param  {Array}  args.params RPC request parameters
 * @return {String}
 */
const getBalance = async (_, { params }) => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.eth.getBalance, params)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = getBalance
