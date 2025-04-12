"use client";
import {Staking} from "../../../components/NFTStaking/passNFTStaking/Staking";
import styles from "@/app/styles/Home.module.css";
import { StakeRewards } from "../../../components/NFTStaking/passNFTStaking/StakeRewards";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
export default function passstake() {

 
  return (
      <div className={styles.container}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        margin: "100px auto",
        width: "100%",
      }}>
        <br />

        <h1 className={styles.deoptitle}
        >PASS Stake</h1>
        <br />
        <p className={styles.deopdescription}
        >Stake PASS, earn S Tokens, 200% APY</p>
        <br />
        <StakeRewards />
        <Staking />
      </div>
      </div>
  );
}
