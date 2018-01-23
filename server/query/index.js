const accounts = require('./accounts.js')
const accountsWithBalances = require('./accountsWithBalances.js')
const blockNumber = require('./blockNumber.js')
const coinbase = require('./coinbase.js')
const gasPrice = require('./gasPrice.js')
const getBalance = require('./getBalance.js')
const getTransactionCount = require('./getTransactionCount.js')
const hashrate = require('./hashrate.js')
const listening = require('./listening.js')
const mining = require('./mining.js')
const peerCount = require('./peerCount.js')
const protocolVersion = require('./protocolVersion.js')
const version = require('./version.js')

module.exports = {
  accounts,
  accountsWithBalances,
  blockNumber,
  coinbase,
  gasPrice,
  getBalance,
  getTransactionCount,
  hashrate,
  listening,
  mining,
  peerCount,
  protocolVersion,
  version,
}
