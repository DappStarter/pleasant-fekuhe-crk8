require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain smile hidden prize bone gaze'; 
let testAccounts = [
"0xdb47a0eac5438b02d4ce549e908efc65b9f0d5a0bc02d0149acf1e9636ec3450",
"0x65d510d13a9f299a053981f89ef3050a26d7c26b375e45549d83ee95ee82c9c4",
"0x3c50259c2a0056da7e16a54a8ca79daf9cb42d2cf0f40bba165c794aff7abfba",
"0xba88dd26b39a4319207773cfbb1c7905d5b519b7eecaf88ff4837d634c0c729c",
"0x940d103e61a601d474e09e0bda50b27df3b882dbcc1ffa7a458d77f34755c605",
"0x300695a7b4bd4360cbd862e961bb262167079d3c8ed1cab69868b249b6a45b0f",
"0xe18d426b42a6894b3328e91250c716ccb6d75bb05dd7facb1763cd0cc42027da",
"0x5d4b844c1940517205774f86bdd78b38bca13dbd735d4b889b397131448b3d48",
"0xa399ec676606759d70ab1666db0a088c4bd4bf9225407d6c9aecc948f6676bc6",
"0xca99da904e77737523d1dbb2038d4b13ff4f552307aca489866d52071d4724ff"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

