"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import styles from "@/app/styles/HomePage.module.css";

export default function Home() {
  return (

    

<div className={styles.container}>


  

            <div className={styles.container1}>
            <SimpleGrid columns={1} spacing={10}>
            <Link
              
              href={"https://docs.snft.pro/snft-chain"}target="_blank"
            >
              <Image justifyItems={"center"} style={{ borderRadius: "20px" }} width="300px" height="100px"
              src={"https://i.imgur.com/cAJHQuV.png"} /> 

            </Link>
           
            </SimpleGrid>


            <SimpleGrid columns={2} spacing={30}>
            <Link
              borderRadius="10px"
              mt="20px"
              background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" }
              style={{ borderRadius: "20px" }}
              border={"1px solid rgba(255, 255, 255, 0.1)"} padding={"50px"}
              href={"/market"}
            >
              <Image justifyItems={"center"} style={{ borderRadius: "20px" }} width="200px" height="200px" margin={"20px 50px 20px 300px"}
                src={"https://i.imgur.com/OKqO3Cn.png"} />
              <Text className={styles.h1}> Marketplace</Text>
              <Text className={styles.h2}> Buy, sell your NFTs and make profits</Text>
            </Link>
            <Link
              borderRadius="10px"
              mt="20px"
              background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" }
              style={{ borderRadius: "20px" }}
              border={"1px solid rgba(255, 255, 255, 0.1)"} padding={"50px"}
              href={"https://create.snft.pro/"}
            >
              <Image justifyItems={"center"} style={{ borderRadius: "20px" }} width="200px" height="200px" margin={"20px 50px 20px 300px"}
                src={"https://i.imgur.com/f8N9Rhv.png"} />
              <Text className={styles.h1}> Launcher</Text>
              <Text className={styles.h2}> Create, manage, and mint NFTs</Text>
            </Link>

            <Link
              borderRadius="10px"
              mt="20px"
              background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" }
              style={{ borderRadius: "20px" }}
              border={"1px solid rgba(255, 255, 255, 0.1)"} padding={"50px"}
              href={"/launchpad"}
            >
              <Image justifyItems={"center"} style={{ borderRadius: "20px" }} width="200px" height="200px" margin={"20px 50px 20px 300px"}
                src={"https://i.imgur.com/OAJCMAy.png"}  />
              <Text className={styles.h1}>EVM Launchpad</Text>
              <Text className={styles.h2}>Be the first to get new Drops</Text>
            </Link>

            <Link
              borderRadius="10px"
              mt="20px"
              background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" }
              style={{ borderRadius: "20px" }}
              border={"1px solid rgba(255, 255, 255, 0.1)"} padding={"50px"}
              href={"/nftstakes"}
            >
              <Image justifyItems={"center"} style={{ borderRadius: "20px" }} width="200px" height="200px" margin={"20px 50px 20px 300px"}
                src={"https://i.imgur.com/K4PKlCm.png"} />
              <Text className={styles.h1}> NFT Stakes</Text>
              <Text className={styles.h2}> Stake your NFTs to get rewards</Text>
            </Link>

            <Link
              borderRadius="10px"
              mt="20px"
              background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" }
              style={{ borderRadius: "20px" }}
              border={"1px solid rgba(255, 255, 255, 0.1)"} padding={"50px"}
              href={"/erc20stakes"}
            >
              <Image justifyItems={"center"} style={{ borderRadius: "20px" }} width="200px" height="200px" margin={"20px 50px 20px 300px"}
                src={"https://i.imgur.com/dt8c1Ia.png"}  />
              <Text className={styles.h1}>ERC20 Stakes </Text>
              <Text className={styles.h2}> Stake your Tokens to get more</Text>
            </Link>

            <Link
              borderRadius="10px"
              mt="20px"
              background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" }
              style={{ borderRadius: "20px" }}
              border={"1px solid rgba(255, 255, 255, 0.1)"} padding={"50px"}
              href={"/faucets"}
            >
              <Image justifyItems={"center"} style={{ borderRadius: "20px" }} width="200px" height="200px" margin={"20px 50px 20px 300px"}
                src={"https://i.imgur.com/0ddhR3X.png"}  />
              <Text className={styles.h1}>EVM Faucets </Text>
              <Text className={styles.h2}> Increase your activity on new EVMs test networks.</Text>
            </Link>

            </SimpleGrid>

          </div>

    </div>



  );
}
