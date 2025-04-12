"use client";

import {Staking} from "../../../components/NFTStaking/unistaking/Staking";
import styles from "@/app/styles/Home.module.css";
import { StakeRewards } from "../../../components/NFTStaking/unistaking/StakeRewards";
export default function passstake() {

 
  return (
    
    <div className={styles.container}>

    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        margin: "50px auto",
        width: "100%",
      }}>
        <br />

        <h1 className={styles.deoptitle}
        >UNI Testnet</h1>
       
        <p className={styles.deopdescription}
        >Stake ERC721, earn ERC20</p>
        <p className={styles.deopdescription}
        >PPH: 1000</p>
        <br />
        <StakeRewards />
        <Staking />
      </div>
      </div>
  );
}
