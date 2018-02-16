const { METHODS } = require('../constants')

/**
 * Returns if client is actively mining new blocks.
 *
 * @example query { mining }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_mining
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {Boolean}
 */
const mining = async (_, args, { makeRPCRequest }) => {
  try {
    const rpc = await makeRPCRequest(METHODS.eth.mining)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = mining
