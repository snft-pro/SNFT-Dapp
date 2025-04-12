import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { polygon } from "@/app/chain";
import { STAKING_CONTRACT_ABI } from "./stakingContractABI";

const stakeerc20TokenContractAddress = "0xD2e586Df315238E01c152eb60f87c8EbCB2D8b70";
const rewarderc20TokenContractAddress = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
const stakingerc20ContractAddress = "0x8d972005b8A9d93428Ca2EBbEbdE4e9EC63AD54B";

export const STAKE_ERC20_TOKEN_CONTRACT = getContract({
    client: client,
    chain: polygon,
    address: stakeerc20TokenContractAddress,
});

export const REWARD_ERC20_TOKEN_CONTRACT = getContract({
    client: client,
    chain: polygon,
    address: rewarderc20TokenContractAddress,
});


export const STAKING_ERC20_CONTRACT = getContract({
    client: client,
    chain: polygon,
    address: stakingerc20ContractAddress,
    abi: STAKING_CONTRACT_ABI
});
