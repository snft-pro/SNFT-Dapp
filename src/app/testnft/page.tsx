"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Text,
} from "@chakra-ui/react";
import styles from "@/app/styles/FreeNFT.module.css";
import SNFT from "@/../components/NftTestnet/SNFT";
import BaseSepolia from "@/../components/NftTestnet/BaseSepolia";
import Unichain from "@/../components/NftTestnet/unichain";
import Bera from "@/../components/NftTestnet/Bera";
import Soneium from "@/../components/NftTestnet/Soneium";
import Camp from "@/../components/NftTestnet/Camp";
import Form from "@/../components/NftTestnet/form";
import Fraxtal from "@/../components/NftTestnet/fraxtal";
import Ink from "@/../components/NftTestnet/ink";
import B3 from "@/../components/NftTestnet/b3";
import Lumia from "@/../components/NftTestnet/lumia";
import Vitruveo from "@/../components/NftTestnet/vitruveo";

export default function Home() {
  return (
  
         
       
         <div className={styles.container3}>

         <div className={styles.container1}>
         <Link href={"/freenft"}><Text  className={styles.muneBtnleft}>Free NFTs Mainnet </Text></Link> 
         <Link href={"/testnft"}><Text  className={styles.muneBtnright}>Free NFTs Testnft </Text></Link> 
         </div>

         <div className={styles.container}>

		 <div className={styles.maink}>
         
         
         <SNFT/>
         <Ink/>
         <Unichain/>
         <BaseSepolia/>
         <Bera/>
         <Soneium/>
         <Camp/>
         <B3/>
         <Vitruveo/>
         <Form/>
         <Fraxtal/>
         <Lumia/>
        
        
         
         </div>   
    </div>
    </div>




  );
}

