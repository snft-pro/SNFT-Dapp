"use client";

import { ConnectButton, darkTheme } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { arbitrum, avalanche, base, optimism, zora, zkSync, polygon, ethereum } from "thirdweb/chains";

import { defineChain } from "thirdweb";
import { client } from "@/app/client";
import { generatePayload, isLoggedIn, login, logout } from "@/../components/auth/auth";

const wallets = [
  inAppWallet({
    auth: {
      options: [
        
        "google",
        "apple",
        "github",
        "coinbase",
        "x",

        "discord",
        "telegram",
        "line",
        "facebook",
        "farcaster",
        
        "twitch",
        "steam",
        
        "email",
        "passkey",
        "phone",
        "guest",
        
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("com.binance.wallet"),
  createWallet("com.okex.wallet"),
  createWallet("com.bitget.web3"),
  createWallet("org.uniswap"),
  createWallet("com.trustwallet.app"),
];

export function Conbutton() {
  return (
    <ConnectButton
    auth={{
      isLoggedIn: async (address) => {
        console.log("checking if logged in!", { address });
        return await isLoggedIn();
      },
      doLogin: async (params) => {
        console.log("logging in!");
        await login(params);
      },
      getLoginPayload: async ({ address }) => generatePayload({ address }),
      doLogout: async () => {
        console.log("logging out!");
        await logout();
      },
    }}
      client={client}
      connectButton={{ label: "Get Started" }}
      wallets={wallets}
      theme={darkTheme({
        colors: {
        primaryButtonBg: "#2f0927",
        primaryButtonText: "#818183",
        secondaryButtonBg: "#18191e",
        secondaryButtonText: "#818183",
        modalBg: "#2f0927",
        accentText: "hsl(315, 67.70%, 24.30%)",
        separatorLine: "hsla(330, 1.90%, 78.80%, 0.10)",
        borderColor: "hsla(330, 1.90%, 78.80%, 0.10)",
      },
    })}
      connectModal={{
        title: "Login",
        size: "wide",
        showThirdwebBranding: true,
      }}
     
      chains={[  
        //minnt
        polygon, ethereum, defineChain(130), optimism, base, defineChain(80094), defineChain(1829), defineChain(185), zora, arbitrum, zkSync, avalanche,  
        defineChain(57073), defineChain(146), defineChain(56),
        defineChain(59144) , defineChain(81457), defineChain(167000), 
        defineChain(8217), defineChain(100), 
        defineChain(34443) , defineChain(1868), defineChain(1135), 
        defineChain(5000), defineChain(888888888), defineChain(250), 



        //testnets
        
        defineChain({id: 98889,testnet:true}), defineChain({id: 84532,testnet:true}), 
        defineChain({id: 1301,testnet:true}), defineChain({id: 1993,testnet:true}),
        defineChain({id: 80084,testnet:true}),defineChain({id: 325000,testnet:true}),
        defineChain({id: 132902,testnet:true}),defineChain({id: 2522,testnet:true}),
        defineChain({id: 1952959480,testnet:true}),defineChain({id: 161221135,testnet:true}),
        defineChain({id: 978657,testnet:true}),defineChain({id: 14333,testnet:true}),
        defineChain({id: 98985,testnet:true}), defineChain({id: 1513,testnet:true}),
        defineChain({id: 1946,testnet:true}), 
        defineChain({id: 763373,testnet:true}),
      ]}

      supportedTokens={{ 
        137: [
        {
        address: "0xD2e586Df315238E01c152eb60f87c8EbCB2D8b70", 
        name: "SNFTPRO",
        symbol: "SP" ,
        icon: "/erc20-icons/sp.png",
      },
      {
        address: "0x81773cFEA4f68216c4F20BDaaAAE8F73e7b16DF9", 
        name: "SNFT",
        symbol: "S" ,
        icon: "/erc20-icons/s.png",
      
      },
    ],
    146: [
      {
      address: "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38", 
      name: "Wrapped Sonic",
      symbol: "wS" ,
      icon: "/erc20-icons/WS.png",
    },
    {
      address: "0x29219dd400f2Bf60E5a23d13Be72B486D4038894", 
      name: "USDC",
      symbol: "USDC" ,
      icon: "/erc20-icons/usdc.png",
    
    },
  ],
  }}
      
    />
  );
}
export default Conbutton;
