const { GraphQLServer } = require('graphql-yoga')

const { RPC_ENDPOINT } = require('./constants')
const Query = require('./query')
const schema = require('./schema.js')

const typeDefs = schema

const resolvers = {
  Query: Query,
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() =>
  console.log(`
  ⚡️  Server is running on localhost:4000
  ⛓  RPC_ENDPOINT => ${RPC_ENDPOINT}
`)
)
