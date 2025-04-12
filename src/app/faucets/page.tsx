"use client";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
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
                 backgroundColor={"rgba(255, 255, 255, 0.1)"} 
                href={"/basesepoliatestnet"}
              >
                <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/base.png"} />
                <Text className={styles.cardtest}>Base Sepolia </Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} 
                href={"/unichain"}
              >
               <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/uni.jpg"} />
                <Text  className={styles.cardtest}>Unichain </Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} 
                href={"/inktest"}
              >
               <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/ink.jpg"} />
                <Text  className={styles.cardtest}>INK Testnet</Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} 
                href={"/fms"}
              >
               <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/fms.png"} />
                <Text  className={styles.cardtest}>FMS Testnet</Text>
              </Link>


              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} 
                href={"/b3testnet"}
              >
               <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/b3.png"} />
                <Text  className={styles.cardtest}>B3 Sepolia </Text>
              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} href={"/berachaintestnet"}
              >
               <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/Bera.jpg"} />
                <Text  className={styles.cardtest}>Berachain Bartio </Text>
              </Link>
              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} href={"/campnetworktestnet"}
              >
               <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/camp.jpg"} />
                <Text  className={styles.cardtest}>Camp Network </Text>
              </Link>
              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} href={"/formtestnet"}
              >
              <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/form.jpeg"} />
                <Text  className={styles.cardtest}>Form Testnet </Text>
              </Link>
              <Link
               border={"1px solid rgba(255, 255, 255, 0.1)"}
               borderRadius="20px 20px 20px 10px"
               p="10px"
               mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} href={"/fraxtaltestnet"}
              >
               <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/frex.png"} />
                <Text className={styles.cardtest}>Fraxtal Testnet </Text>
              </Link>
              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} href={"/lumiatestnet"}
              >
               <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px"src={"/pic/lum.jpg"} />
                <Text  className={styles.cardtest}>Lumia Testnet</Text>
              </Link>
              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} href={"/plumetestnet"}
              >
               <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/plume.jpeg"} />
                <Text  className={styles.cardtest}>Plume Network </Text>
              </Link>
              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} href={"/treasuretestnet"}
              >
               <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/Treasure.jpg"} />
                <Text  className={styles.cardtest}>Treasure Ruby</Text>
              </Link>
              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} href={"/vitruveotestnet"}
              >
               <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/Vitruveo.png"} />
                <Text  className={styles.cardtest}>Vitruveo Network</Text>
              </Link>
              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} href={"/superposition"}
              >
                <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/super.jpg"} />
                <Text className={styles.cardtest}>Superposition</Text>
              </Link>
              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} href={"/story"}
              >
                <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/story.jpg"} />
                <Text  className={styles.cardtest}>Story Iliad </Text>
              </Link>
              <Link
               border={"1px solid rgba(255, 255, 255, 0.1)"}
               borderRadius="20px 20px 20px 10px"
               p="10px"
               mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} href={"/soneium"}
              >
                <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/son.jpg"} />
                <Text className={styles.cardtest}>Soneium</Text>
              </Link>
              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                backgroundColor={"rgba(255, 255, 255, 0.1)"} href={"/erc404"}
              >
                <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/pic/404.jpeg"} />
                <Text  className={styles.cardtest}>SNFT ERC404</Text>
              </Link>

    
            </Flex>
        </div>
      </div>
  );
}

