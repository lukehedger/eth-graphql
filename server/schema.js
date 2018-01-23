const typeDefs = `
  type Query {
    accounts(params: [String] = []): [String]!
    blockNumber(params: [String] = []): String!
    getBalance(params: [String] = []): String!
  }
`

module.exports = typeDefs
