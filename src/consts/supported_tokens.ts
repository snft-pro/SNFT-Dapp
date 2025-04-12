import { defineChain, type Chain } from "thirdweb";
import { SNFT, sonic, playblock }  from "./chains";

export type Token = {
  tokenAddress: string;
  symbol: string;
  icon: string;
};

export type SupportedTokens = {
  chain: Chain;
  tokens: Token[];
};

export const SUPPORTED_TOKENS: SupportedTokens[] = [
  {
    chain: defineChain(137),
    tokens: [
      {
        tokenAddress: "0x81773cFEA4f68216c4F20BDaaAAE8F73e7b16DF9",
        symbol: "S",
        icon: "/erc20-icons/s.png",
      },
      {
        tokenAddress: "0xD2e586Df315238E01c152eb60f87c8EbCB2D8b70",
        symbol: "SP",
        icon: "/erc20-icons/sp.png",
      },
      {
        tokenAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        symbol: "USDT",
        icon: "/erc20-icons/usdt.png",
      },
      {
        tokenAddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
        symbol: "USDC",
        icon: "/erc20-icons/usdc.png",
      },],},
  {
  chain: defineChain(130),
    tokens: [
      {
        tokenAddress: "0x078D782b760474a361dDA0AF3839290b0EF57AD6",
        symbol: "USDC",
        icon: "/erc20-icons/usdc.png",
      },
      {
        tokenAddress: "0x8f187aA05619a017077f5308904739877ce9eA21",
        symbol: "UNI",
        icon: "/pic/uni2.png",
      },
      
    ],
  },
  {
    chain: sonic,
      tokens: [
        {
          tokenAddress: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38",
          symbol: "wS",
          icon: "/erc20-icons/WS.png",
        },
        {
          tokenAddress: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894",
          symbol: "USDC",
          icon: "/erc20-icons/usdc.png",
        },
        
      ],
    },
  {
    chain: playblock,
      tokens: [
        {
          tokenAddress: "0x34fdc6f5B4e1fFD14fDf86F729c6b7973eA381C5",
          symbol: "USDB",
          icon: "https://i.imgur.com/9rCzfzs.png",
        },
        {
          tokenAddress: "0x73C3cDd1418c3F17D54A81148387d93122802E72",
          symbol: "USDP",
          icon: "https://i.imgur.com/9rCzfzs.png",
        },
        {
          tokenAddress: "0xC3B539972C522d883aaA904aAAdcfE69A2d9F26B",
          symbol: "G",
          icon: "https://i.imgur.com/MYGLlVa.png",
        },
        
      ],
    },

    {
      chain: SNFT,
        tokens: [
          {
            tokenAddress: "0x0B6470eF16F905A6892975d2f80d6932B3aa0954",
            symbol: "SUSD",
            icon: "/erc20-icons/sp2.png",
          },
          
        ],
      },

];




export const NATIVE_TOKEN_ICON_MAP: { [key in Chain["id"]]: string } = {

  8453: "/native-token-icons/eth.png",
  59144: "/native-token-icons/eth.png",
  185: "/native-token-icons/eth.png",
  81457: "/native-token-icons/eth.png",
  80094: "/pic/bera.png",
  324: "/native-token-icons/eth.png",
  763373: "/native-token-icons/eth.png",
  57073: "/native-token-icons/eth.png",
  167000: "/native-token-icons/eth.png",
  42161: "/native-token-icons/eth.png",
  146: "/erc20-icons/WS.png",
  130: "/native-token-icons/eth.png",
  10: "/native-token-icons/eth.png",
  43114: "/native-token-icons/avax.png",
  137: "/native-token-icons/matic.png",
  8217: "/native-token-icons/k.png",
  100: "/native-token-icons/xd.png",
  250: "/native-token-icons/f.png",
  12012: "/erc20-icons/sp.png",
  1829: "https://i.imgur.com/9rCzfzs.png",
};

