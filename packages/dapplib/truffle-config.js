require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name random magic artwork imitate prize equal giant'; 
let testAccounts = [
"0xaccb1ecdf40bf9afb7d2bee02b21e19606574adc1e82d15a5b4467250967e6a8",
"0x488477c2da91641937b037eb06146e81a69d2fb16c43c85848750917518b402d",
"0x4f2e5ab8204a78dd0a922c4563366eb0118b4611247266d19e1a07ba36eabf76",
"0x62a2332d61133656f6f3ff0d0f24a885308def54c439716220e926fe4cca583b",
"0x10f2713747597bdf88b1bc89b7a7c09e23dbea21604acfefc5d1a78f524eba78",
"0xfd3d9e2254c2c3553fcc718f847079e62d52efb58a9f64adf8e607adcbe92d01",
"0xfadc68336d769fe5784c7dc5d0b94642b0b68198601e4f5d31b3665558a6daf5",
"0x52d23f2189241d2e6034f81d948bfd9715763846bc20130b64fc7033fc3ecf19",
"0x294d7064f813f82413f113542ee6aafa8bc84976ff635c639b98752ed2bbb318",
"0xe8bd75a5c058d7afeef3c23c7fc8add42aebe098435b1ec0959bf40713e75333"
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

