import { client } from "@/consts/client";
import { useMarketplaceContext } from "@/hooks/useMarketplaceContext";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { MediaRenderer } from "thirdweb/react";

export function ListingGrid() {
  const { listingsInSelectedCollection, nftContract } = useMarketplaceContext();
  const len = listingsInSelectedCollection.length;
 
  if (!listingsInSelectedCollection || !len) return <></>;
  return (
    <SimpleGrid columns={6} spacing={10} justifyItems={"center"}  m="10px 200px 10px 200px" >
  


      {listingsInSelectedCollection.map((item) => (
        <Box
          key={item.id}
          rounded="12px"
          as={Link}
          href={`/collection/${nftContract.chain.id}/${
            nftContract.address
          }/token/${item.asset.id.toString()}`}
          _hover={{ textDecoration: "none" }}
          w={200}
          flexWrap={"wrap"}
        >
        <Flex direction="column" border="1px solid rgba(255, 255, 255, 0.1)" borderRadius="10px"  m={"30px"} backgroundColor={"rgba(255, 255, 255, 0.1)"}>
          <MediaRenderer width="140px" height="140px"  
          
          style={{
            padding: "5px", marginBottom: "10px", marginTop: "5px", }}
                            client={client}
                            src={item.asset.metadata.image} />
                          <Text fontSize={"10px"}  ml="15px" align={"left"}>
                            {item.asset?.metadata?.name ?? "Unknown item"}
                          </Text>

                          <Text fontSize={"10px"} mb="5px" ml="15px" align={"left"}>
                          {item.currencyValuePerToken.displayValue}{" "}
                          {item.currencyValuePerToken.symbol}
                          </Text>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
}
