import { MediaRenderer, useReadContract } from "thirdweb/react";
import { getNFT as getNFT721 } from "thirdweb/extensions/erc721";
import { getNFT as getNFT1155 } from "thirdweb/extensions/erc1155";
import { client } from "@/consts/client";
import { Box, Flex, Heading, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useMarketplaceContext } from "@/hooks/useMarketplaceContext";
import { ListingGrid } from "./ListingGrid";
import { AllNftsGrid } from "./AllNftsGrid";
import styles from "@/app/styles/Home.module.css";


export function Collection() {
  // `0` is Listings, `1` is `Auctions`
  const [tabIndex, setTabIndex] = useState<number>(0);
  const {
    type,
    nftContract,
    isLoading,
    contractMetadata,
    listingsInSelectedCollection,
    supplyInfo,
  } = useMarketplaceContext();

  // In case the collection doesn't have a thumbnail, we use the image of the first NFT
  const { data: firstNFT, isLoading: isLoadingFirstNFT } = useReadContract(
    type === "ERC1155" ? getNFT1155 : getNFT721,
    {
      contract: nftContract,
      tokenId: 0n,
      queryOptions: {
        enabled: isLoading || !!contractMetadata?.image,
      },
    }
  );

  const thumbnailImage =
    contractMetadata?.image || firstNFT?.metadata.image || "";
  return (
    <div className={styles.container3} >
      <Box mt="50px">
        <Flex direction="column" gap="4">
          <MediaRenderer
            client={client}
            src={thumbnailImage}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "20px",
              width: "50px",
              height: "50px",
            }} />
          <Heading mx="auto" fontSize={"2xl"} mt={"10px"} > 
            {contractMetadata?.name || "loading..."}
          </Heading>
          {contractMetadata?.description && (
            <Text
             
              
              textAlign="center"
              mt={"10px"}
              pl={"300px"}
              pr={"300px"}
              
            >
              {contractMetadata.description}
            </Text>
          )}

          <Tabs
            variant="soft-rounded"
            mx="auto"
            mt="20px"
            onChange={(index) => setTabIndex(index)}
            isLazy
          >
            <TabList>
              <Tab fontSize={"10px"} p={"10px 20px 10px 20px"} m={"5px"} backgroundColor={"#131418"} border="1px solid rgba(255, 255, 255, 0.1)" borderRadius="5px">Listings ({listingsInSelectedCollection.length || 0})</Tab>
              <Tab fontSize={"10px"} p={"10px 20px 10px 20px"} m={"5px"} backgroundColor={"#131418"} border="1px solid rgba(255, 255, 255, 0.1)" borderRadius="5px">
                All items{" "}
                {supplyInfo
                  ? `(${(
                    supplyInfo.endTokenId -
                    supplyInfo.startTokenId +
                    1n
                  ).toString()})`
                  : ""}
              </Tab>
              {/* Support for English Auctions coming soon */}
              {/* <Tab>Auctions ({allAuctions?.length || 0})</Tab> */}
            </TabList>
          </Tabs>
        </Flex>
      </Box>
      <Flex direction="column">
        {tabIndex === 0 && <ListingGrid />}
        {tabIndex === 1 && <AllNftsGrid />}
      </Flex>
     
    </div>
  );
}
