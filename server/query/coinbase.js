const { METHODS } = require('../constants')

/**
 * Returns the client coinbase address.
 *
 * @example query { coinbase }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_coinbase
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {String}
 */
const coinbase = async (_, args, { makeRPCRequest }) => {
  try {
    const rpc = await makeRPCRequest(METHODS.eth.coinbase)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = coinbase
