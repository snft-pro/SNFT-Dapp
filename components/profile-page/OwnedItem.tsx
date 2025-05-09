import { client } from "@/consts/client";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import type { NFT, ThirdwebContract } from "thirdweb";
import { MediaRenderer } from "thirdweb/react";

export function OwnedItem(props: {
  nft: NFT;
  nftCollection: ThirdwebContract;
}) {
  const { nft, nftCollection } = props;
  return (
    <>
      <Box
        rounded="12px"
        as={Link}
        href={`/collection/${nftCollection.chain.id}/${
          nftCollection.address
        }/token/${nft.id.toString()}`}
        _hover={{ textDecoration: "none" }}
        w={200}
        flexWrap={"wrap"}
      >
          <Flex direction="column" border="1px solid rgba(255, 255, 255, 0.1)" borderRadius="10px"  m={"30px"} backgroundColor={"rgba(255, 255, 255, 0.1)"} >
          <MediaRenderer client={client} src={nft.metadata.image} width="140px"  height="140px"   style={{
            padding: "5px", marginBottom: "10px", marginTop: "5px", }}/>
          <Text fontSize={"10px"} mb="5px" ml="15px" align={"left"}>{nft.metadata?.name ?? "Unknown item"}</Text>
        </Flex>
      </Box>
    </>
  );
}
