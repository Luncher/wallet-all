class SUMBIT {
  constructor (options) {
    //TODO
    this.coinTag = 'SUBMIT'
  }

  transfer (address, value) {
    //TODO
  }

  async transferAll (address) {
    const balance = await this.getBalance()
    return this.transfer(address, balance)
  }

  getBalance () {
    //TODO
  }

  getTransactionCount () {
    //TODO
  }
}

module.exports = SUMBIT