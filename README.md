## Light Wallet Implements


### Coin List

+ ETC
+ ETH
+ XMR
+ etc.


### Quick Start

+ Install
> npm install wallet-all -S

+ Usage

```javascript
const { createWalletByType } = require('wallet-all')

const walletAccount = {
  coinTag: 'ETH',
  privKey: 'xqwjhdiuq3hioq3'
}
const wallet = createWalletByType(walletAccount.coinTag, walletAccount)

const balance = await wallet.getBalance()

```

### API List

+ getTransactionCount
+ getBalance
+ transferAll
+ transfer


## License MIT