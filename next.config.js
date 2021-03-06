
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports =withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },

  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    baseApiUrl: process.env.API_BASE_URL, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    baseApiUrl: process.env.API_BASE_URL, // Pass through env variables
  },
})