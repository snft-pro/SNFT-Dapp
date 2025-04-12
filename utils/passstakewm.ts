import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";
import { polygon } from "@/app/chain";

//Pass stakes wM


const nftContractAddress = "0xDeC4f3EC151CeF3154659Bf8F43cC5332c533b93";
const rewardTokenContractAddress = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
const stakingContractAddress = "0xC582B99Ab9b3F59B5aBC059DeE3359F2F2eA7552";

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
