const { METHODS } = require('../constants')

/**
 * Returns a list of addresses owned by client.
 *
 * @example query { accounts }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_accounts
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Array}  args.params            RPC request parameters
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {Array}
 */
const accounts = async (_, { params }, { makeRPCRequest }) => {
  try {
    const rpc = await makeRPCRequest(METHODS.eth.accounts, params)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = accounts
