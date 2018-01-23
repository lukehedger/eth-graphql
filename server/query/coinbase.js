const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns the client coinbase address.
 *
 * @example query { coinbase }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_coinbase
 *
 * @return {String}
 */
const coinbase = async () => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.eth.coinbase)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = coinbase
