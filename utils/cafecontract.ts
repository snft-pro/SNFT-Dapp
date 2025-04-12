'use client';

import { polygon } from "@/aoo/../consts/chains";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { contractABI } from "./cafecontractABI";


export const contract = getContract({
    client: client,
    chain: polygon,
    address: "0x0387468Df031376b8182e7E4e2a1eA9A9867e2A1",
    abi: contractABI,
});
