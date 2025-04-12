import { defineChain } from "thirdweb";
export {base, arbitrum, avalanche,  optimism }  from "thirdweb/chains";

    export const SNFT = defineChain({
        id: 98889,
        name: "SNFT Testnet",
        shortName: "SNFT Testnet",
        nativeCurrency: {
          decimals: 18,
          name: "SNFT",
          symbol: "SNFT",
        },
        rpcUrls: {
          default: { http: ["https://98889.rpc.thirdweb.com"] },
        },
        blockExplorers: {
          default: {
            name: "SNFT Explorer",
            url: "https://texplorer.snft.in/",
          },
        },
      });
      export const playblock = defineChain({
        id: 1829,
        name: "PlayBlock",
        shortName: "PlayBlock",
        nativeCurrency: {
          decimals: 18,
          name: "PBG",
          symbol: "PBG",
        },
        rpcUrls: {
          default: { http: ["https://rpc.playblock.io"] },
        },
        blockExplorers: {
          default: {
            name: "PlayBlock Explorer",
            url: "https://explorer.playblock.io/",
          },
        },
      });

      export const sonic = defineChain({
        id: 146,
        name: "Sonic",
        shortName: "Sonic",
        nativeCurrency: {
          decimals: 18,
          name: "Sonic",
          symbol: "S",
        },
        rpcUrls: {
          default: { http: ["https://rpc.soniclabs.com"] },
        },
        blockExplorers: {
          default: {
            name: "Sonic",
            url: "https://sonicscan.org/",
          },
          
        },
        
      });

      export const Bera = defineChain({
        id: 80094,
        name: "Berachain",
        shortName: "Berachain",
        nativeCurrency: {
          decimals: 18,
          name: "BERA",
          symbol: "BERA",
        },
        rpcUrls: {
        default: { http: ["https://80094.rpc.thirdweb.com"] },
        },
        blockExplorers: {
          default: {
            name: "Berachain Explorer",
            url: "https://berascan.com/",
          },
          
        },
        
      });

      export const UNI = defineChain({
        id: 130,
        name: "unichain",
        shortName: "unichain",
        nativeCurrency: {
          decimals: 18,
          name: "ETH",
          symbol: "ETH",
        },
        rpcUrls: {
          default: { http: ["https://130.rpc.thirdweb.com"] },
        },
        blockExplorers: {
          default: {
            name: "unichain Explorer",
            url: "https://uniscan.xyz/",
          },
        },
      });

      export const INK = defineChain({
        id: 57073,
        name: "INK",
        shortName: "INK",
        nativeCurrency: {
          decimals: 18,
          name: "ETH",
          symbol: "ETH",
        },
        rpcUrls: {
          default: { http: ["https://57073.rpc.thirdweb.com"] },
        },
        blockExplorers: {
          default: {
            name: "INK Explorer",
            url: "https://explorer.inkonchain.com/",
          },
        },
      });

      export const MINT = defineChain({
        id: 185,
        name: "MINT",
        shortName: "MINT",
        nativeCurrency: {
          decimals: 18,
          name: "ETH",
          symbol: "ETH",
        },
        rpcUrls: {
          default: { http: ["https://185.rpc.thirdweb.com"] },
        },
        blockExplorers: {
          default: {
            name: "MINT Explorer",
            url: "https://explorer.mintchain.io/",
          },
        },
      });

      export const FMS = defineChain({
        id: 203,
        name: "FMS",
        shortName: "FMS",
        nativeCurrency: {
          decimals: 18,
          name: "FMS",
          symbol: "F",
        },
        rpcUrls: {
          default: { http: ["https://203.rpc.thirdweb.com"] },
        },
        blockExplorers: {
          default: {
            name: "FMS Explorer",
            url: "https://explorer.fmtlol.com/",
          },
        },
      });


      export const polygon = defineChain({
        id: 137,
        name: "Polygon Mainnet",
        shortName: "Polygon",
        nativeCurrency: {
          decimals: 18,
          name: "POLYGON",
          symbol: "POL",
        },
        rpcUrls: {
          default: { http: ["https://137.rpc.thirdweb.com/"] },
        },
        blockExplorers: {
          default: {
            name: "Polygon Explorer",
            url: "https://polygonscan.com",
          },
        },
      });
      

      export const zkSync = defineChain({
        id: 324,
        name: "zkSync Era Mainnet",
        shortName: "zkSync",
        nativeCurrency: {
          decimals: 18,
          name: "ETH",
          symbol: "ETH",
        },
        rpcUrls: {
          default: { http: ["https://324.rpc.thirdweb.com/"] },
        },
        blockExplorers: {
          default: {
            name: "zkSync Explorer",
            url: "https://era.zksync.network/",
          },
        },
      });

      export const linea = defineChain({
        id: 59144,
        name: "Linea Mainnet",
        shortName: "linea",
        nativeCurrency: {
          decimals: 18,
          name: "ETH",
          symbol: "ETH",
        },
        rpcUrls: {
          default: { http: ["https://59144.rpc.thirdweb.com/"] },
        },
        blockExplorers: {
          default: {
            name: "linea Explorer",
            url: "https://lineascan.build",
          },
        },
      });


      export const blast = defineChain({
        id: 81457,
        name: "Blast",
        shortName: "blast",
        nativeCurrency: {
          decimals: 18,
          name: "ETH",
          symbol: "ETH",
        },
        rpcUrls: {
          default: { http: ["https://81457.rpc.thirdweb.com/"] },
        },
        blockExplorers: {
          default: {
            name: "blast Explorer",
            url: "https://blastscan.io/",
          },
        },
      });


      export const Taiko = defineChain({
        id: 167000,
        name: "Taiko Mainnet",
        shortName: "taiko ",
        nativeCurrency: {
          decimals: 18,
          name: "ETH",
          symbol: "ETH",
        },
        rpcUrls: {
          default: { http: ["https://167000.rpc.thirdweb.com/"] },
        },
        blockExplorers: {
          default: {
            name: "Taiko Explorer",
            url: "https://taikoscan.io",
          },
        },
      });


      export const klaytn = defineChain({
        id: 8217,
        name: "Klaytn Mainnet Cypress",
        shortName: "klaytn",
        nativeCurrency: {
          decimals: 18,
          name: "Klaytn",
          symbol: "KLAY",
        },
        rpcUrls: {
          default: { http: ["https://8217.rpc.thirdweb.com/"] },
        },
        blockExplorers: {
          default: {
            name: "KLAY Explorer",
            url: "https://scope.klaytn.com",
          },
        },
      });


      export const gnosis = defineChain({
        id: 100,
        name: "Gnosis",
        shortName: "gnosis",
        nativeCurrency: {
          decimals: 18,
          name: "xDAI",
          symbol: "XDAI",
        },
        rpcUrls: {
          default: { http: ["https://100.rpc.thirdweb.com/"] },
        },
        blockExplorers: {
          default: {
            name: "gnosis Explorer",
            url: "https://gnosisscan.io/",
          },
        },
      });


      export const fantom = defineChain({
        id: 250,
        name: "Fantom Opera",
        shortName: "fantom",
        nativeCurrency: {
          decimals: 18,
          name: "Fantom",
          symbol: "FTM",
        },
        rpcUrls: {
          default: { http: ["https://250.rpc.thirdweb.com/"] },
        },
        blockExplorers: {
          default: {
            name: "fantom Explorer",
            url: "https://ftmscan.com/",
          },
        },
      });

      
      export const unichain = defineChain({
        id: 1301,
        name: "unichain testnet",
        shortName: "unichain",
        nativeCurrency: {
          decimals: 18,
          name: "ETH",
          symbol: "ETH",
        },
        rpcUrls: {
          default: { http: ["https://1301.rpc.thirdweb.com/"] },
        },
        blockExplorers: {
          default: {
            name: "unichain Explorer",
            url: "https://unichain-sepolia.blockscout.com/",
          },
        },
        testnet: true,
      });
