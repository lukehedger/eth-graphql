const { METHODS } = require('../constants')

/**
 * Returns the balance of the account of given address.
 *
 * @example query { getBalance }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getbalance
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Array}  args.params            RPC request parameters
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {String}
 */
const getBalance = async (_, { params }, { makeRPCRequest }) => {
  try {
    const rpc = await makeRPCRequest(METHODS.eth.getBalance, params)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = getBalance
