// set providor

var bitskiInstance;
var network;

if (Meteor.isDevelopment) {
  bitskiInstance = new bitski.Bitski('F3YKmUz8wJPevbjd0LJOfSTkg4IiwWlcypE6AdBXweui1lhjC1kcGDgBCub35QkO', 'http://localhost:3000/');
  network = 'kovan';
} else if (window.location.host.match('kovan')) {
  bitskiInstance = new bitski.Bitski('F3YKmUz8wJPevbjd0LJOfSTkg4IiwWlcypE6AdBXweui1lhjC1kcGDgBCub35QaC', 'https://kovan-wallet.bitski.com/');
  network = 'kovan';
} else if (window.location.host.match('rinkeby')) {
  bitskiInstance = new bitski.Bitski('F3YKmUz8wJPevbjd0LJOfSTkg4IiwWlcypE6AdBXweui1lhjC1kcGDgBCub35QaB', 'https://rinkeby-wallet.bitski.com/');
  network = 'rinkeby';
} else {
  bitskiInstance = new bitski.Bitski('F3YKmUz8wJPevbjd0LJOfSTkg4IiwWlcypE6AdBXweui1lhjC1kcGDgBCub35QaA', 'https://wallet.bitski.com/');
  network = 'mainnet';
}

var provider = bitskiInstance.getProvider(network);
provider.locked = false;

web3 = new Web3(provider);

