const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns the current network id.
 *
 * @example query { version }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#net_version
 *
 * @return {String}
 */
const version = async () => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.net.version)

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = version
