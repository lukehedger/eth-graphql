const { METHODS } = require('../constants')

/**
 * Returns the current price per gas in wei.
 *
 * @example query { gasPrice }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_gasprice
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {String}
 */
const gasPrice = async (_, args, { makeRPCRequest }) => {
  try {
    const rpc = await makeRPCRequest(METHODS.eth.gasPrice)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = gasPrice
