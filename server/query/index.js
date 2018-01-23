const accounts = require('./accounts.js')
const accountsWithBalances = require('./accountsWithBalances.js')
const blockNumber = require('./blockNumber.js')
const coinbase = require('./coinbase.js')
const gasPrice = require('./gasPrice.js')
const getBalance = require('./getBalance.js')
const getBlockByHash = require('./getBlockByHash.js')
const getBlockByNumber = require('./getBlockByNumber.js')
const getBlockTransactionCountByHash = require('./getBlockTransactionCountByHash.js')
const getBlockTransactionCountByNumber = require('./getBlockTransactionCountByNumber.js')
const getTransactionByBlockHashAndIndex = require('./getTransactionByBlockHashAndIndex.js')
const getTransactionByBlockNumberAndIndex = require('./getTransactionByBlockNumberAndIndex.js')
const getTransactionByHash = require('./getTransactionByHash.js')
const getTransactionCount = require('./getTransactionCount.js')
const getUncleCountByBlockHash = require('./getUncleCountByBlockHash.js')
const getUncleCountByBlockNumber = require('./getUncleCountByBlockNumber.js')
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
  getBlockByHash,
  getBlockByNumber,
  getBlockTransactionCountByHash,
  getBlockTransactionCountByNumber,
  getTransactionByBlockHashAndIndex,
  getTransactionByBlockNumberAndIndex,
  getTransactionByHash,
  getTransactionCount,
  getUncleCountByBlockHash,
  getUncleCountByBlockNumber,
  hashrate,
  listening,
  mining,
  peerCount,
  protocolVersion,
  version,
}
