import { useMarketplaceContext } from "@/hooks/useMarketplaceContext";
import { Link } from "@chakra-ui/next-js";
import {
  AccordionButton,
  Text,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import type { NFT } from "thirdweb";
import { shortenAddress } from "thirdweb/utils";
import styles from "@/app/styles/Home.module.css";

type Props = {
  nft: NFT;
};

export function NftDetails(props: Props) {
  const { type, nftContract } = useMarketplaceContext();
  const { nft } = props;
  const contractUrl = `${
    nftContract.chain.blockExplorers
      ? nftContract.chain.blockExplorers[0]?.url
      : ""
  }/address/${nftContract.address}`;
  const tokenUrl = `${
    nftContract.chain.blockExplorers
      ? nftContract.chain.blockExplorers[0]?.url
      : ""
  }/nft/${nftContract.address}/${nft.id.toString()}`;
  return (
    <AccordionItem >
      <Text >
        <AccordionButton className={styles.listnft2}>
          <Box   >
            Details
          </Box>
          
          <AccordionIcon />
        </AccordionButton>
       
      </Text>
      <AccordionPanel className={styles.listdetails2} pb={4}>
        <Flex direction="row" justifyContent="space-between" marginRight={"10px"}>
          <Text className={styles.listdetails}>Contract address</Text>
          <Link fontSize={12} color="white" href={contractUrl} target="_blank">
            {shortenAddress(nftContract.address)}
          </Link>
        </Flex>
        <Flex direction="row" justifyContent="space-between" mb="1" marginRight={"20px"}>
          <Text className={styles.listdetails}>Token ID</Text>
          <Link fontSize={12} fontWeight={"bold"}  color="white" href={tokenUrl} target="_blank">
            {nft?.id.toString()}
          </Link>
        </Flex>
        <Flex direction="row" justifyContent="space-between" mb="1" marginRight={"20px"}>
          <Text className={styles.listdetails}>Token Standard</Text>
          <Text className={styles.listdetails}>{type}</Text>
        </Flex>
        <Flex direction="row" justifyContent="space-between" mb="1" marginRight={"20px"}>
          <Text className={styles.listdetails}>Chain</Text>
          <Text className={styles.listdetails} >{nftContract.chain.name ?? "Unnamed chain"}</Text>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}
