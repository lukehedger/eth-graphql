const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns the current price per gas in wei.
 *
 * @example query { gasPrice }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_gasPrice
 *
 * @return {String}
 */
const gasPrice = async () => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.eth.gasPrice)

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = gasPrice
