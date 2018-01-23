const unit = require('ethjs-unit')

const { METHODS, RPC_ENDPOINT } = require('../constants')
const { makeRPCRequest } = require('../util')

/**
 * Returns a list of addresses owned by client with their balance.
 *
 * @example query { accountsWithBalances { address balance } }
 *
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_accounts
 * @see https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getbalance
 *
 * @return {Array}
 */
const accountsWithBalances = async () => {
  try {
    const { result: accounts } = await makeRPCRequest(RPC_ENDPOINT, METHODS.eth.accounts)

    const balances = await Promise.all(
      accounts.map(account =>
        makeRPCRequest(RPC_ENDPOINT, METHODS.eth.getBalance, [account])
      )
    )

    const result = balances.map(({ result: balance }, index) => {
      return {
        address: accounts[index],
        balance: unit.fromWei(balance, 'ether')
      }
    })

    return result
  } catch (e) {
    console.error(e)
  }
}

module.exports = accountsWithBalances
