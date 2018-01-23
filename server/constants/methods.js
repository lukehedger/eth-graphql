module.exports = {
  eth: {
    accounts: 'eth_accounts',
    blockNumber: 'eth_blockNumber',
    coinbase: 'eth_coinbase',
    gasPrice: 'eth_gasPrice',
    getBalance: 'eth_getBalance',
    getBlockByHash: 'eth_getBlockByHash',
    getBlockByNumber: 'eth_getBlockByNumber',
    getBlockTransactionCountByHash: 'eth_getBlockTransactionCountByHash',
    getBlockTransactionCountByNumber: 'eth_getBlockTransactionCountByNumber',
    getTransactionByBlockHashAndIndex: 'eth_getTransactionByBlockHashAndIndex',
    getTransactionByBlockNumberAndIndex:
      'eth_getTransactionByBlockNumberAndIndex',
    getTransactionByHash: 'eth_getTransactionByHash',
    getTransactionCount: 'eth_getTransactionCount',
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
