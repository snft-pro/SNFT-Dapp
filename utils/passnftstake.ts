import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";
import { polygon } from "@/app/chain";

//nft stakes


const nftContractAddress = "0xDeC4f3EC151CeF3154659Bf8F43cC5332c533b93";
const rewardTokenContractAddress = "0x81773cFEA4f68216c4F20BDaaAAE8F73e7b16DF9";
const stakingContractAddress = "0x58cD092a3299468699765D46D448578053e6faD2";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: polygon,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: polygon,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: polygon,
    address: stakingContractAddress,
    abi: stakingABI
});
