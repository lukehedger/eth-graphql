const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns a list of addresses owned by client.
 *
 * @example query { accounts }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_accounts
 *
 * @param  {Object} _           Parent resolver context
 * @param  {Object} args        Query arguments
 * @param  {Array}  args.params RPC request parameters
 * @return {Array}
 */
const accounts = async (_, { params }) => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.eth.accounts, params)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = accounts
