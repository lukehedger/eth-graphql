/**
 * Extract the protocol of a URL
 *
 * @example getURLProtocol('ws://localhost:8545') //=> 'ws:'
 *
 * @param  {String} url URL to analyse
 * @return {String}     Protocol
 */
const getURLProtocol = url => {
  return url.match(/^(.*)+?\/\//)[1]
}

module.exports = getURLProtocol
