const { METHODS } = require('../constants')

/**
 * Returns the current network id.
 *
 * @example query { version }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#net_version
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {String}
 */
const version = async (_, args, { makeRPCRequest }) => {
  try {
    const rpc = await makeRPCRequest(METHODS.net.version)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = version
