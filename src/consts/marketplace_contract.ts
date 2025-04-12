import type { Chain } from "thirdweb";
import {base, linea, blast , klaytn, gnosis, zkSync, fantom, polygon, Taiko, 
  arbitrum, avalanche,  optimism, INK, UNI, SNFT, sonic, Bera, MINT, playblock }  from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};


export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
 
  {
    address: "0x11a19869a61FaC9a4147517615F2344CB6027A30",
    chain: playblock,
    
  },
  {
    address: "0x1f0a00e6A0fc6EDf3fF3fb8cfff71e31315989A2",
    chain: base,
  },
  {
    address: "0xca19e7ABeA38BfFf1918553A70d5BDb39e311342",
    chain: Bera,
  },
  {
    address: "0xa4043d8d0FbacB4f1D43599C6C07F3D04e39C6C6",
    chain: MINT,
  },
  {
    address: "0xC3f63DA59CE158952CBE2Ad39DB34Ae93B28AdDe",
    chain: linea,
  },
  {
    address: "0x08E18050487067430B4c67F4899F6b94E3A99196",
    chain: blast,
  },
  {
    address: "0x4512D95DE22180054DA59CEe7852B1a6Bf545361",
    chain: klaytn,
  },
  {
    address: "0xe02549EAB7dc6e53E85dfe52a1C8EecCF99AED2c",
    chain: gnosis,
  },
  {
    address: "0x9232963139c25Cc3aE3be8831714059e8E74E855",
    chain: zkSync,
  },
  {
    address: "0x229c72F38B55F831Cc4387d4Ca25CB0FE4448189",
    chain: fantom,
  },
  {
    address: "0x5f9eBf2e5EEA096dD4630cCD4deb26f8bb21d7A1",
    chain: polygon,
  },
  {
    address: "0x12c9Bd8045940368C79fd7f5011EfEa636a4d577",
    chain: arbitrum,
  },
  {
    address: "0x860B210216cd48b0332c59E62D021B15bD0402c6",
    chain: avalanche,
  },
  {
    address: "0x9B697c1076fD588e015929B796EB7481b4f36320",
    chain: optimism,
  },
  {
    address: "0xB2C3278cA677E6F52bF0811f2f47ed4baa8C47a0",
    chain: Taiko,
  },
  {
    address: "0x8429A4AAE7c261e6e8676220502a5b0E0B6b6C09",
    chain: UNI,
    
  },
  {
    address: "0xE31dB5b167860683345601DD82d8A734644C7960",
    chain: INK,
    
  },
  {
    address: "0x672986DFDC86D9E2Ce19738bBe5FdAa6e8E9973a",
    chain: sonic,
    
  },
];
