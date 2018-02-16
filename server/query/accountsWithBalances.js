const unit = require('ethjs-unit')

const { METHODS } = require('../constants')

/**
 * Returns a list of addresses owned by client with their balance.
 *
 * @example query { accountsWithBalances { address balance } }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_accounts
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getbalance
 *
 * @param  {Object} _                      Parent resolver context
 * @param  {Object} args                   Query arguments
 * @param  {Object} context                GraphQL request context
 * @param  {Object} context.makeRPCRequest RPC request factory
 * @return {Array}
 */
const accountsWithBalances = async (_, args, { makeRPCRequest }) => {
  try {
    const { result: accounts } = await makeRPCRequest(METHODS.eth.accounts)

    const balances = await Promise.all(
      accounts.map(account => makeRPCRequest(METHODS.eth.getBalance, [account]))
    )

    const result = balances.map(({ result: balance }, index) => {
      return {
        address: accounts[index],
        balance: unit.fromWei(balance, 'ether'),
      }
    })

    return result
  } catch (e) {
    console.error(e)
  }
}

module.exports = accountsWithBalances
