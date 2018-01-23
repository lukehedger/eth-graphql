const typeDefs = `
  type AccountWithBalance {
    address: String!
    balance: String!
  }

  type Query {
    accounts(params: [String] = []): [String]!
    accountsWithBalances: [AccountWithBalance]!
    blockNumber(params: [String] = []): String!
    coinbase: String!
    gasPrice: String!
    getBalance(params: [String] = []): String!
    getBlockTransactionCountByHash(params: [String] = []): String!
    getBlockTransactionCountByNumber(params: [String] = []): String!
    getTransactionCount(params: [String] = []): String!
    hashrate: String!
    listening: Boolean!
    mining: Boolean!
    peerCount: String!
    protocolVersion: String!
    version: String!
  }
`

module.exports = typeDefs
