"use client";

import {Staking} from "../../../components/NFTStaking/sonic/Staking";
import styles from "@/app/styles/Home.module.css";
import { StakeRewards } from "../../../components/NFTStaking/sonic/StakeRewards";
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
        >Sonic Stake</h1>
       
        <p className={styles.deopdescription}
        >Stake Sonic NFTs, earn $wS</p>
        
        <br />
        <StakeRewards />
        <Staking />
      </div>
      </div>
  );
}
