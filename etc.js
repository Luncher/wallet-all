const Wallet = require('etc-wallet')

class ETCWallet {
  constructor ({ privKey }) {
    this.coinTag = 'ETC'
    this.wallet = new Wallet({ privKey })
  }

  transfer (address, value) {
    return this.wallet.transfer(address, value)
  }

  async transferAll (address) {
    return this.wallet.transferAll(address)
  }

  hasEnoughBalance (amount) {
    return this.getBalance()
      .then(balance => {
        return balance > amount
      })
  }

  getBalance () {
    return this.wallet.getBalance().then(balance => parseFloat(balance).toFixed(2))
  }

  getTransactionCount () {
    return this.wallet.getTransactionCount()
  }
}

module.exports = ETCWallet