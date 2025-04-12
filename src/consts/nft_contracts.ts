import type { Chain } from "thirdweb";
import {base, linea, blast , klaytn, gnosis, zkSync, fantom, polygon, Taiko, 
  arbitrum, avalanche,  optimism, INK, SNFT, sonic, Bera, MINT, UNI, playblock }  from "./chains";
 
export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

export const NFT_CONTRACTS: NftContract[] = [
  
  {
    address: "0xDeC4f3EC151CeF3154659Bf8F43cC5332c533b93",
    chain: polygon,
    title: "SNFT Pass ",
    thumbnailUrl:
      "https://i.imgur.com/fF1bBmc.png",
    type: "ERC721",
  },
  {
    address: "0x7DaC98F96c8340Be795866719C145B0C0265F46e",
    chain: polygon,
    title: "SNFT Key",
    thumbnailUrl:
      "https://i.imgur.com/mPx1N42.jpg",
    type: "ERC721",
  },

  {
    address: "0x13F9EE06C48054E41129Ae1b49CeD953F51dCF5c",
    chain: playblock,
    title: "Playblock",
    thumbnailUrl:
      "https://i.imgur.com/cXcPB4F.png",
    type: "ERC721",
  },
  {
    address: "0x7b272565B45d021787179994719423667CD8C43d",
    chain: UNI,
    title: "Unichain",
    thumbnailUrl:
      "https://i.imgur.com/x7dMVQ0.jpg",
    type: "ERC721",
  },

  {
    address: "0x4eD093B31feb870bf3cf3fb814B5AEe74262eBaa",
    chain: Bera,
    title: "Berachain",
    thumbnailUrl:
      "https://i.imgur.com/pDY5GGY.png",
    type: "ERC721",
  },
  {
    address: "0xB46a8a942030b54dB3F45Cd277a2533F38111262",
    chain: MINT,
    title: "Mint Mainnet",
    thumbnailUrl:
      "https://i.imgur.com/sB3sIeu.jpg",
    type: "ERC721",
  },
  {
    address: "0xdc096f820E2fd89c8afEa2490974d92749dD377C",
    chain: INK,
    title: "INK",
    thumbnailUrl:
      "https://i.imgur.com/fTtO7jy.jpg",
    type: "ERC721",
  },
  {
    address: "0x1eCeFd1B0D3Ac06e2a0AAb23732b04De46017159",
    chain: sonic,
    title: "sonic",
    thumbnailUrl:
      "https://i.imgur.com/X3JyQeI.jpg",
    type: "ERC721",
  },



 
  {
    address: "0xE76f12FDc5531322039d3A2AE5b4eD17194a251f",
    chain: base,
    title: "Demo Base",
    thumbnailUrl:
      "https://i.imgur.com/lv5MCAR.png",
    type: "ERC721",
  },
  {
    address: "0xfe05B947d9349D530c8657D7AA755138D7a149A2",
    chain: linea,
    title: "Demo Linea",
    thumbnailUrl:
      "https://i.imgur.com/80oD6pt.png",
    slug: "ugly-waifu",
    type: "ERC721",
  },

  {
    address: "0x7D54c9371f2220102FA5E2db2eF5D40dDE72a1b5",
    chain: blast,
    title: "Demo Blast",
    description: "",
    thumbnailUrl:
      "https://i.imgur.com/bOPIC0W.png",
    slug: "unnamed-collection",
    type: "ERC721",
  },
  {
    address: "0xA69A900da50730A195135591d9E7810607797645",
    chain: klaytn,
    title: "Demo Klaytn",
    thumbnailUrl:
      "https://i.imgur.com/8bvgu4Q.png",
    slug: "gorobot",
    type: "ERC721",
  },
  {
    address: "0x6e1A9d6f12bb74341f022982F0C1daFaa0c2539c",
    chain: gnosis,
    title: "Demo Gnosis",
    thumbnailUrl:
      "https://i.imgur.com/nGw8HS4.png",
    type: "ERC721",
  },
  {
    address: "0x1ee86bf10E5Cfd36194AD0668A5535EA33D4B13B",
    chain: zkSync,
    title: "Demo ZkSync",
    thumbnailUrl:
      "https://i.imgur.com/Kj6INC7.png",
    type: "ERC721",
  },
  {
    address: "0x02c7931c86Ece09279540D17f5455DAbf7fcf04A",
    chain: fantom,
    title: "Demo Fantom",
    thumbnailUrl:
      "https://i.imgur.com/zL0Aja1.png",
    type: "ERC721",
  },

  {
    address: "0x77BBDEaC215DD746477FfA64DE3da7beC33D6098",
    chain: Taiko,
    title: "Demo Taiko",
    thumbnailUrl:
      "https://i.imgur.com/PJmLhia.png",
    type: "ERC721",
  },
  {
    address: "0x30e8b63305A9c319850550fCF9DeDD085F0d331d",
    chain: arbitrum,
    title: "Demo Arbitrum",
    thumbnailUrl:
      "https://i.imgur.com/m5UUcAq.png",
    type: "ERC721",
  },
  {
    address: "0xCa4a8e241CbcAC63a91713b478Dd4508872b74E5",
    chain: avalanche,
    title: "Demo Avalanche",
    thumbnailUrl:
      "https://i.imgur.com/Vgg0jyL.png",
    type: "ERC721",
  },
  {
    address: "0x388FDF615a04da73DC06F85e7818c7d894937044",
    chain: optimism,
    title: "Demo Optimism",
    thumbnailUrl:
      "https://i.imgur.com/depiJuC.png",
    type: "ERC721",
  },
 
];
