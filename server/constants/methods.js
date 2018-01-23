module.exports = {
  eth: {
    accounts: 'eth_accounts',
    blockNumber: 'eth_blockNumber',
    coinbase: 'eth_coinbase',
    gasPrice: 'eth_gasPrice',
    getBalance: 'eth_getBalance',
    getBlockTransactionCountByHash: 'eth_getBlockTransactionCountByHash',
    getBlockTransactionCountByNumber: 'eth_getBlockTransactionCountByNumber',
    getTransactionCount: 'eth_getTransactionCount',
    getUncleCountByBlockHash: 'eth_getUncleCountByBlockHash',
    getUncleCountByBlockNumber: 'eth_getUncleCountByBlockNumber',
    hashrate: 'eth_hashrate',
    mining: 'eth_mining',
    protocolVersion: 'eth_protocolVersion',
  },
  net: {
    listening: 'net_listening',
    peerCount: 'net_peerCount',
    version: 'net_version',
  },
}
