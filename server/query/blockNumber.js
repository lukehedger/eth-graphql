const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns the number of most recent block.
 *
 * @example query { blockNumber }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_blocknumber
 *
 * @param  {[Object]}  _      ?
 * @param  {[Array]}   params RPC request parameters
 * @return {Promise}
 */
const blockNumber = async (_, { params }) => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.eth.blockNumber, params)

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = blockNumber
