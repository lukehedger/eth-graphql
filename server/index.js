const { GraphQLServer } = require('graphql-yoga')
const boxen = require('boxen')
const chalk = require('chalk')

const { RPC_ENDPOINT } = require('./constants')
const Query = require('./query')
const schema = require('./schema.js')

const typeDefs = schema

const resolvers = {
  Query: Query,
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => {
  const message =
    chalk.yellow.bold('eth-graphql') +
    '\n\nServer is running on http://localhost:4000\n\n' +
    `RPC_ENDPOINT => ${RPC_ENDPOINT}`

  console.log(
    boxen(message, {
      align: 'center',
      borderColor: 'magenta',
      margin: 1,
      padding: 1,
    })
  )
})
