const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')

const typeDefs = `
  type Query {
    accounts(params: [String]): [String]!
    blockNumber(params: [String]): String!
  }
`

const resolvers = {
  Query: {
    accounts: async (_, { params }) => {
      try {
        const rpc = await fetch('http://localhost:8545', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        	body: JSON.stringify({
            jsonrpc: '2.0',
          	method: 'eth_accounts',
          	params: params,
          	id: 1,
          })
        })
          .then(res => res.json())

        return rpc.result
      } catch (e) {
        console.error(e)
      }
    },
    blockNumber: async (_, { params }) => {
      try {
        const rpc = await fetch('http://localhost:8545', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        	body: JSON.stringify({
            jsonrpc: '2.0',
          	method: 'eth_blockNumber',
          	params: params,
          	id: 1,
          })
        })
          .then(res => res.json())

        return rpc.result
      } catch (e) {
        console.error(e)
      }
    },
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => console.log('Server is running on localhost:4000'))
