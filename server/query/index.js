const accounts = require('./accounts.js')
const accountsWithBalances = require('./accountsWithBalances.js')
const blockNumber = require('./blockNumber.js')
const getBalance = require('./getBalance.js')
const listening = require('./listening.js')
const peerCount = require('./peerCount.js')
const protocolVersion = require('./protocolVersion.js')
const version = require('./version.js')

module.exports = {
  accounts,
  accountsWithBalances,
  blockNumber,
  getBalance,
  listening,
  peerCount,
  protocolVersion,
  version,
}
