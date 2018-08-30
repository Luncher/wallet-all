const ethers = require('ethers')

class ETHWallet {
  constructor ({ privKey }) {
    this.coinTag = 'ETH'
    this.wallet = new ethers.Wallet(privKey)
    this.wallet.provider = ethers.providers.getDefaultProvider()
  }

  transfer (address, value) {
    const transaction = {
      to: address,
      gasLimit: 21000,
      nonce: Date.now(),
      value: ethers.utils.parseEther(String(value))
    }
    const signTransaction = this.wallet.sign(transaction)
    return this.wallet.provider.sendTransaction(signTransaction)
      .then((transactionHash) => {
        return { transactionHash }
      })
  }

  async transferAll (address) {
    const balance = await this.getBalance()
    return this.transfer(address, balance)
  }

  getBalance () {
    return this.wallet.getBalance()
      .then(balance => {
        return balance.toNumber()
      })
      .then(balance => parseFloat(balance).toFixed(2))
  }

  getTransactionCount () {
    return this.wallet.getTransactionCount()
      .then(transactionCount => {
        return transactionCount
      })
  }
}

module.exports = ETHWallet