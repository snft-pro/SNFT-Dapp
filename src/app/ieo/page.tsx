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
    <><div className={styles.container2}>
    <Link
           borderRadius="10px"
           p={"5px"}
           href={"https://min.snft.pro"}
         >
           <Image justifyItems={"center"} style={{ marginLeft: "", margin: "", borderRadius: "20px" }} width="85px" height="85px" 
             src={"/pic/bro.png"} border={"0px solid rgba(255, 255, 255, 0.1) "} p={"5px"}  />
           <Text className={styles.smtit}> Browser </Text>
         </Link>
        
         <Link
           borderRadius="10px"
           p={"5px"}
           href={"https://drive.google.com/file/d/1DriR_biVmT3jvAeXM18024rzlJ4WKpNA/view"}
           target="_blank"
         >
           <Image justifyItems={"center"} style={{ marginLeft: "", margin: "", borderRadius: "20px" }} width="70px" height="70px" 
             src={"/pic/andr.jpg"} border={"0px solid rgba(255, 255, 255, 0.1) "} p={"5px"}  />
           <Text  className={styles.smtit2}> Android </Text>
         </Link> 
         <Link
           borderRadius="10px"
           p={"5px"}
           href={"https://t.me/snftprobot"}
         >
           <Image justifyItems={"center"} style={{ marginLeft: "", margin: "", borderRadius: "20px" }} width="70px" height="70px" 
             src={"/pic/tma.jpeg"} border={"0px solid rgba(255, 255, 255, 0.1) "} p={"5px"}  />
           <Text className={styles.smtit2}> Mini App </Text>
         </Link></div><><>
         
      

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
                backgroundColor={"rgba(255, 255, 255, 0.1)"} href={"/spieo"}
              >
               <Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ marginLeft: "10px", marginRight: "10px", borderRadius: "20px", marginBottom: "10px" }} width="150px" height="150px" gap={"10px"}
                  padding="5px 5px 5px 5px" src={"/erc20-icons/sp.png"} />


                <Text className={styles.cardtest}>SP IEO</Text>
                <Text className={styles.cardtest}>SNFTPRO tokens presale</Text>
                <Text className={styles.cardtest}>Price/Token 0.5 MATIC </Text>
              </Link>
              </Flex>
        </div>
      </div></>

        </></>
  );
}

