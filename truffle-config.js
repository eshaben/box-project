module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        develop: { // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
            host: '127.0.0.1',
            port: 8545,
            network_id: '*'
        },
        ropsten: {
            network_id: 3,
        }
    },
    plugins: [
        'truffle-plugin-verify'
    ],
    api_keys: {
        etherscan: process.env.ETHERSCAN_API_KEY
    }
}
