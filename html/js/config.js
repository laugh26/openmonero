var config = {
    apiUrl: "http://127.0.0.1:1984/",
    mainnetExplorerUrl: "https://explorer.txchange.online/",
    testnetExplorerUrl: "https://testnet.txchange.online/",
    stagenetExplorerUrl: "http://139.162.60.17:80821/",
    nettype: 0, /* 0 - MAINNET, 1 - TESTNET, 2 - STAGENET */
    coinUnitPlaces: 12,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    coinSymbol: 'TXX',
    openAliasPrefix: "txx",
    coinName: 'Txchangecoin',
    coinUriPrefix: 'txchangecoin:',
    addressPrefix: 0x1a071e,
    integratedAddressPrefix: 0x4e1e,
    subAddressPrefix: 0x4a9e,
    addressPrefixTestnet: 0x1ed01e,
    integratedAddressPrefixTestnet: 0x214c9e,
    subAddressPrefixTestnet: 0x1b810c9e,
    addressPrefixStagenet: 24,
    integratedAddressPrefixStagenet: 25,
    subAddressPrefixStagenet: 36,
    feePerKB: new JSBigInt('2000000000'),//20^10 - not used anymore, as fee is dynamic.
    dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 10, // minimum mixin for hardfork v8 is 10 (ring size 11)
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 120,
    debugMode: false
};
