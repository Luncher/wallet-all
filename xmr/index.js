const moneroWallet = require('./wallet')

class XMRWallet {
  constructor (options) {
    this.coinTag = 'XMR'
    if (options.publicKey) options.username = options.publicKey
    if (options.privKey) options.password = options.privKey
    this.Wallet = new moneroWallet(
      options.hostname,
      options.port,
      options.username,
      options.password
    )
  }

  transfer (address, value) {
    return this.Wallet.transfer({ amount: value, address })
      .then(result => {
        return result
      })
  }

  async transferAll (address) {
    const balance = await this.getBalance()
    return this.transfer(address, balance)
  }

  getBalance () {
    return this.Wallet.balance()
      .then(balance => {
        return balance
      })
  }

  open_wallet (...args) {
    return this.Wallet.open_wallet(...args)
  }

  getTransactionCount () {
    //TODO
  }
}

// const instance = new XMRWallet({
//   hostname: '127.0.0.1',
//   port: 18082,
//   username: 'chen',
//   password: '0219card...'
// })

module.exports = XMRWallet