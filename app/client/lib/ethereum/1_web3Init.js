// set providor
if (Meteor.isDevelopment) {
  web3 = new Web3(bitski.InitializeWeb3('F3YKmUz8wJPevbjd0LJOfSTkg4IiwWlcypE6AdBXweui1lhjC1kcGDgBCub35QkO', 'http://localhost:3000/').currentProvider);
} else {
  web3 = new Web3(bitski.InitializeWeb3('F3YKmUz8wJPevbjd0LJOfSTkg4IiwWlcypE6AdBXweui1lhjC1kcGDgBCub35QkR', 'https://wallet.bitski.com/').currentProvider);
}
