"use client";

import { ProfileSection } from "@/../components/profile-page/Profile";
import { Image, Text,Box, Flex, Heading } from "@chakra-ui/react";
import { useActiveAccount } from "thirdweb/react";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function ProfilePage() {
  const account = useActiveAccount();
  
  if (!account)
    return (

      <><div className={styles.container2}>
        <Link
          href={"https://min.snft.pro"}
        >
          <Image justifyItems={"center"} style={{ marginLeft: "", margin: "", borderRadius: "20px" }} width="85px" height="85px"
            src={"/pic/bro.png"} border={"0px solid rgba(255, 255, 255, 0.1) "} p={"5px"} />
          <Text className={styles.smtit}> Browser </Text>
        </Link>

        <Link
          href={"https://drive.google.com/file/d/1DriR_biVmT3jvAeXM18024rzlJ4WKpNA/view"}
          target="_blank"
        >
          <Image justifyItems={"center"} style={{ marginLeft: "", margin: "", borderRadius: "20px" }} width="70px" height="70px"
            src={"/pic/andr.jpg"} border={"0px solid rgba(255, 255, 255, 0.1) "} p={"5px"} />
          <Text className={styles.smtit2}> Android </Text>
        </Link>
        <Link
          href={"https://t.me/snftprobot"}
        >
          <Image justifyItems={"center"} style={{ marginLeft: "", margin: "", borderRadius: "20px" }} width="70px" height="70px"
            src={"/pic/tma.jpeg"} border={"0px solid rgba(255, 255, 255, 0.1) "} p={"5px"} />
          <Text className={styles.smtit2}> Mini App </Text>
        </Link></div><>
          <Box justifyContent={"center"} alignItems={"center"} justifyItems={"center"} paddingTop={"200px" } paddingBottom={"55px"}>
            <Heading fontSize={"14px"} color={"gray"}>Log in to continue</Heading>

            <Flex>
            </Flex>
          </Box></></>
    );
  return <ProfileSection address={account.address} />;
}
