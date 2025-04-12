import { client } from "@/consts/client";
import { useMarketplaceContext } from "@/hooks/useMarketplaceContext";
import { Link } from "@chakra-ui/next-js";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { toEther } from "thirdweb";
import { MediaRenderer } from "thirdweb/react";
import styles from "@/app/styles/Home.module.css";

export default function RelatedListings({
  excludedListingId,
}: {
  excludedListingId: bigint;
}) {
  const { nftContract, allValidListings } = useMarketplaceContext();
  const listings = allValidListings?.filter(
    (o) =>
      o.id !== excludedListingId &&
      o.assetContractAddress.toLowerCase() === nftContract.address.toLowerCase()
  );
  if (!listings || !listings.length) return <></>;
  return (
    <AccordionItem className={styles.container3} >
      <Text>
        <AccordionButton className={styles.listnft3}>
          <Box  as="span" flex="1" textAlign="left">
            More from this collections
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Text>
      <AccordionPanel pb={4}>
        <Box
          display="flex"
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          justifyItems={"center"}
          flexWrap={"wrap"}
          padding="4"
          mt={30}
          width="100%"
          gap="25px"
        >
          {listings?.map((item) => (
            <Box
              key={item.id.toString()}
              rounded="12px"
              as={Link}
              href={`/collection/${nftContract.chain.id}/${
                nftContract.address
              }/token/${item.asset.id.toString()}`}
              _hover={{ textDecoration: "none" }}
              
            >
              <Flex className={styles.tokenBox3}>
                <MediaRenderer  
                  client={client}
                  src={item.asset.metadata.image}
                  style={{ width: "150px", height: "150px", aspectRatio: "1", alignItems: "left", margin: "20px", borderRadius: "10px" }}
                />
                <Text  className={styles.listtitle}>
                  {item.asset.metadata?.name ?? "Unknown item"}</Text>
                <Text  className={styles.listtitle2}>
                {item.currencyValuePerToken.displayValue}{" "}
                {item.currencyValuePerToken.symbol}
                </Text>
              </Flex>
            </Box>
          ))}
        </Box>
      </AccordionPanel>
    </AccordionItem>
  );
}
