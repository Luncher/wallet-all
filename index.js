const ETHWallet = require('./eth')
const XMRWallet = require('./xmr')
const ETCWallet = require('./etc')
const SUBBitWallet = require('./sumbit')

function createWalletByType (type, options) {
  let instance
  switch (type.toUpperCase()) {
    case 'ETH': {
      instance = new ETHWallet(options)
      break
    }
    case 'ETC': {
      instance = new ETCWallet(options)
      break
    }
    case 'XMR': {
      instance = new XMRWallet(options)
      break
    }
    case 'SUBBIT': {
      instance = new SUBBitWallet(options)
      break
    }
    default: {
      throw new Error("Invalid Wallet Type: ", type)
    }
  }
  return instance
}

const types = ['eth', 'etc', 'xmr', 'sumbit']

module.exports = types.reduce((acc, type) => {
  acc[type] = {
    transfer (options, ...args) {
      const instance = createWalletByType(type, options)
      return instance.transfer(...args)
    },

    getBalance (options, ...args) {
      const instance = createWalletByType(type, options)
      return instance.getBalance(...args)
    },

    getTransactionCount (options, ...args) {
      const instance = createWalletByType(type, options)
      return instance.getTransactionCount(...args)
    }
  }
  return acc
}, {})

module.exports.createWalletByType = createWalletByType