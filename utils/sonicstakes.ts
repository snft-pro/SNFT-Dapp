import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";
import { Sonic } from "@/app/chain";

//Pass stakes wM


const nftContractAddress = "0x1eCeFd1B0D3Ac06e2a0AAb23732b04De46017159";
const rewardTokenContractAddress = "0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38";
const stakingContractAddress = "0x3478D47Db99a08F03e5146DbF0A016D34bED45cd";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: Sonic,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: Sonic,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: Sonic,
    address: stakingContractAddress,
    abi: stakingABI
});
