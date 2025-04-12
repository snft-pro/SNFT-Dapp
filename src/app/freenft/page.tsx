"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Image,
  Text,
} from "@chakra-ui/react";
import styles from "@/app/styles/FreeNFT.module.css";


import Polygon from "@/../components/FreeNFT/polygon";
import Ink from "@/../components/FreeNFT/Ink";
import Sonic from "@/../components/FreeNFT/sonic";
import Base from "@/../components/FreeNFT/Base";
import Linea from "@/../components/FreeNFT/linea";
import Blast from "@/../components/FreeNFT/blast";
import Taiko from "@/../components/FreeNFT/taiko";
import Klaytn from "@/../components/FreeNFT/Klaytn";
import Gnosis from "@/../components/FreeNFT/gnosis";
import Zksync from "@/../components/FreeNFT/zksync";
import Arbitrum from "@/../components/FreeNFT/arbitrum";
import Optimism from "@/../components/FreeNFT/optimism";


export default function Home() {
  return (
        <div className={styles.container3}>
        
         <div className={styles.container1}>
         <Link href={"/freenft"}><Text  className={styles.muneBtnleft}>Free NFTs Mainnet </Text></Link> 
         <Link href={"/testnft"}><Text  className={styles.muneBtnright}>Free NFTs Testnft </Text></Link> 
         </div>

         <div className={styles.container}>

         <div className={styles.maink}>

         <Polygon/>
         <Ink/>
         <Sonic/>
         <Base/>
         <Linea/>
         <Blast/>
         <Taiko/>
         <Klaytn/>
         <Gnosis/>
         <Zksync/>
         <Arbitrum/>
         <Optimism/>
		</div>
    </div>
    </div>




  );
}

