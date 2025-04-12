import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { polygon } from "@/app/chain";
import { STAKING_CONTRACT_ABI } from "./stakingContractABI";

const stakeerc20TokenContractAddress = "0x81773cFEA4f68216c4F20BDaaAAE8F73e7b16DF9";
const rewarderc20TokenContractAddress = "0xD2e586Df315238E01c152eb60f87c8EbCB2D8b70";
const stakingerc20ContractAddress = "0xD819aE315fDF5b22C63394848d9fEf8C7eA8dcEC";

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
