"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

import styles from "@/app/styles/Home.module.css";

export default function Home() {
  return (

         <div className={styles.container}>
         <div className={styles.maink}>
            <Flex
              direction="row"
              flexWrap="wrap"
              grow="50"
              justifyItems="center"
              gap="10px"
              alignItems="center"
              maxW="1900px"
            >
              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" } 
                href={"/pass"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/1.png"} />
                <Text className={styles.cardtest}>SNFT Pass</Text>
                <Text className={styles.cardtest}>Price: 1 POL</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" }  
                href={"/polygon"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/2.png"} />
                <Text className={styles.cardtest}>SNFT Key</Text>
                <Text className={styles.cardtest}>Price: 0.5 POL</Text>
              </Link>

               <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" }  
                href={"/playnance"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"https://i.imgur.com/cXcPB4F.png"} />
                <Text className={styles.cardtest}>Playnance</Text>
                <Text className={styles.cardtest}>Price: 9 PBG</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" } 
                href={"/uni"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/uni.jpg"} />
                <Text className={styles.cardtest}>Unichain</Text>
                <Text className={styles.cardtest}>Price: 0.0001 ETH</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" } 
                href={"/mint"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/mint.png"} />
                <Text className={styles.cardtest}>Mint Mainnet</Text>
                <Text className={styles.cardtest}>Price: 0.0001 ETH</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" }  
                href={"/bera"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/bera.png"} />
                <Text className={styles.cardtest}>Berachain Launch</Text>
                <Text className={styles.cardtest}>Price: 0.1 BERA</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" } 
                href={"/ink"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/ink.jpg"} />
                <Text className={styles.cardtest}>Free INK</Text>
                <Text className={styles.cardtest}>Price: 0 ETH</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" } 
                href={"/sonic"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/sonic.jpg"} />
                <Text className={styles.cardtest}>Sonic</Text>
                <Text className={styles.cardtest}>Price: 0.01 S</Text>
              </Link>


              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" }
                href={"/base"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/5.png"} />
                <Text className={styles.cardtest}>Free Base</Text>
                <Text className={styles.cardtest}>Price: 0 ETH</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                 p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" } 
                href={"/linea"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/6.png"} />
                <Text className={styles.cardtest}>Free Linea</Text>
                <Text className={styles.cardtest}>Price: 0 ETH</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                 p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" } 
                href={"/blast"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/13.png"} />
                <Text className={styles.cardtest}>Free Blast</Text>
                <Text className={styles.cardtest}>Price: 0 ETH</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                 p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" } 
                href={"/taiko"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/12.png"} />
                <Text className={styles.cardtest}>Free TAIKO</Text>
                <Text className={styles.cardtest}>Price: 0 ETH</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                 p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" } 
                href={"/klaytn"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/11.png"} />
                <Text className={styles.cardtest}>Free Klaytn</Text>
                <Text className={styles.cardtest}>Price: 0 KLAY</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                 p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" } 
                href={"/gnosis"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/10.png"} />
                <Text className={styles.cardtest}>Free Gnosis</Text>
                <Text className={styles.cardtest}>Price: 0 XDAI</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                 p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" } 
                href={"/zksync"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/7.png"} />
                <Text className={styles.cardtest}>Free zkSync</Text>
                <Text className={styles.cardtest}>Price: 0 ETH</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" }
                href={"/fantom"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/4.png"} />
                <Text className={styles.cardtest}>Free Fantom</Text>
                <Text className={styles.cardtest}>Price: 0 FTM</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                 p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" }
                href={"/arbitrum"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/8.png"} />
                <Text className={styles.cardtest}>Free Arbitrum</Text>
                <Text className={styles.cardtest}>Price: 0 ETH</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                 p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" } 
                href={"/optimism"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/9.png"} />
                <Text className={styles.cardtest}>Free Optimism</Text>
                <Text className={styles.cardtest}>Price: 0 ETH</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                 p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" }
                href={"/avalanche"}
              >
                  <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/3.png"} />
                <Text className={styles.cardtest}>SNFT Avalanche</Text>
                <Text className={styles.cardtest}>Price: 0 AVAX</Text>
              </Link>

            </Flex>
        </div>
      </div>
  );
}
