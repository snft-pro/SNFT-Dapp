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
       href={"/sstake"}
              >
                <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px"  src={"/erc20-icons/s.png"} />


                <Text className={styles.cardtest}>SNFT Token</Text>
                <Text className={styles.cardtest}>Earn SP 25% APY</Text>


              </Link>

              <Link
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                borderRadius="20px 20px 20px 10px"
                p="10px"
                mt="20px"
                background={" linear-gradient(90deg, rgba(56, 8, 46, 0.849) 0%, rgba(3, 29, 44, 0.808) 100%)" }
                href={"/spstake"}
              >
               <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/erc20-icons/sp2.png"} />
                <Text className={styles.cardtest}>SNFTPRO Token </Text>
                <Text className={styles.cardtest}>Earn MATIC 15% APY  </Text>
 
              </Link>

            </Flex>
        </div>
      </div>
  );
}


