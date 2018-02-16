const { METHODS } = require('../constants')

/**
 * Returns if client is actively listening for network connections.
 *
 * @example query { listening }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#net_listening
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {Boolean}
 */
const listening = async (_, args, { makeRPCRequest }) => {
  try {
    const rpc = await makeRPCRequest(METHODS.net.listening)

    if (rpc.error) {
      throw new Error(rpc.error.message)
    }

    return rpc.result
  } catch (e) {
    console.error(e)
  }
}

module.exports = listening
