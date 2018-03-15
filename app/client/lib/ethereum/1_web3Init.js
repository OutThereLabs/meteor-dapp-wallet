// set providor
if (Meteor.isDevelopment) {
  web3 = new Web3(bitski.InitializeWeb3('F3YKmUz8wJPevbjd0LJOfSTkg4IiwWlcypE6AdBXweui1lhjC1kcGDgBCub35QkO', 'kovan', 'http://localhost:3000/').currentProvider);
} else if (window.location.host.match('kovan')) {
  web3 = new Web3(bitski.InitializeWeb3('F3YKmUz8wJPevbjd0LJOfSTkg4IiwWlcypE6AdBXweui1lhjC1kcGDgBCub35QaC', 'kovan', 'https://kovan-wallet.bitski.com/').currentProvider);
} else if (window.location.host.match('rinkeby')) {
  web3 = new Web3(bitski.InitializeWeb3('F3YKmUz8wJPevbjd0LJOfSTkg4IiwWlcypE6AdBXweui1lhjC1kcGDgBCub35QaB', 'rinkeby', 'https://rinkeby-wallet.bitski.com/').currentProvider);
} else {
  web3 = new Web3(bitski.InitializeWeb3('F3YKmUz8wJPevbjd0LJOfSTkg4IiwWlcypE6AdBXweui1lhjC1kcGDgBCub35QaA', 'mainnet', 'https://wallet.bitski.com/').currentProvider);
}
