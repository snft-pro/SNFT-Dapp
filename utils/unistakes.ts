import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";
import { unichain } from "@/app/chain";

//Pass stakes wM


const nftContractAddress = "0x2823EABA33742a258A5E36A10c8dBc0905fDb37b";
const rewardTokenContractAddress = "0x14af6F23Dad2eC2AaDf35494E7ce21bA4Aa90625";
const stakingContractAddress = "0x55C298c408ef0a569D0B40cafE9BEbC575EAE4D9";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: unichain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: unichain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: unichain,
    address: stakingContractAddress,
    abi: stakingABI
});
