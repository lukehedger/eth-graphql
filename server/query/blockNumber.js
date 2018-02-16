const { METHODS } = require('../constants')

/**
 * Returns the number of most recent block.
 *
 * @example query { blockNumber }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_blocknumber
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {String}
 */
const blockNumber = async (_, args, { makeRPCRequest }) => {
  try {
    const rpc = await makeRPCRequest(METHODS.eth.blockNumber)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = blockNumber
