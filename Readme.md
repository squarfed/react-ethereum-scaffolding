Ethereum and react project scaffolding
======================================
This repo contains the scaffolding necessary to create an etherum smart
contract Dapp which uses React for the front end.

The javascript app is scaffolded using webpack for the build, karma and mocha
for the tests. The smart contract is also built automatically using webpack and
the two loaders `web3-loader` and `solc-loader`.

Running
-------
You need to start [testrpc](https://github.com/ethereumjs/testrpc):

    testrpc

Then install the packages and start the app:

    npm install
    npm start
