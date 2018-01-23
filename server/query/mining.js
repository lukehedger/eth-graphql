const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns if client is actively mining new blocks.
 *
 * @example query { mining }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_mining
 *
 * @return {Boolean}
 */
const mining = async () => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.eth.mining)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = mining
