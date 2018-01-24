const METHODS = require('./methods.js')

// Set env variables in non-production environments
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: 'server/.env' })
}

const { RPC_ENDPOINT } = process.env

module.exports = {
  METHODS,
  RPC_ENDPOINT,
}
