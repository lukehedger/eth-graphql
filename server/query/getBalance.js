const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns the balance of the account of given address.
 *
 * @example query { getBalance }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getbalance
 *
 * @param  {[Object]}  _      ?
 * @param  {[Array]}   params RPC request parameters
 * @return {Promise}
 */
const getBalance = async (_, { params }) => {
  try {
    const rpc = await makeRPCRequest(RPC_ENDPOINT, METHODS.eth.getBalance, params)

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = getBalance
