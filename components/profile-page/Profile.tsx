import {
  Box,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { blo } from "blo";
import { shortenAddress } from "thirdweb/utils";
import { ProfileMenu } from "./Menu";
import { useState } from "react";
import { NFT_CONTRACTS, type NftContract } from "@/consts/nft_contracts";
import {
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { getContract } from "thirdweb";
import { client } from "@/consts/client";
import { getOwnedERC721s } from "@/extensions/getOwnedERC721s";
import { OwnedItem } from "./OwnedItem";
import { getAllValidListings } from "thirdweb/extensions/marketplace";
import { MARKETPLACE_CONTRACTS } from "@/consts/marketplace_contract";
import { Link } from "@chakra-ui/next-js";
import { getOwnedERC1155s } from "@/extensions/getOwnedERC1155s";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useGetENSAvatar } from "@/hooks/useGetENSAvatar";
import { useGetENSName } from "@/hooks/useGetENSName";
import styles from "@/app/styles/Home.module.css";



type Props = {
  address: string;
};

export function ProfileSection(props: Props) {
  const { address } = props;
  const account = useActiveAccount();
  const isYou = address.toLowerCase() === account?.address.toLowerCase();
  const { data: ensName } = useGetENSName({ address });
  const { data: ensAvatar } = useGetENSAvatar({ ensName });
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [selectedCollection, setSelectedCollection] = useState<NftContract>(
    NFT_CONTRACTS[0]
  );
  const contract = getContract({
    address: selectedCollection.address,
    chain: selectedCollection.chain,
    client,
  });

  const {
    data,
    error,
    isLoading: isLoadingOwnedNFTs,
  } = useReadContract(
    selectedCollection.type === "ERC1155" ? getOwnedERC1155s : getOwnedERC721s,
    {
      contract,
      owner: address,
      requestPerSec: 50,
      queryOptions: {
        enabled: !!address,
      },
    }
  );

  const chain = contract.chain;
  const marketplaceContractAddress = MARKETPLACE_CONTRACTS.find(
    (o) => o.chain.id === chain.id
  )?.address;
  if (!marketplaceContractAddress) throw Error("No marketplace contract found");
  const marketplaceContract = getContract({
    address: marketplaceContractAddress,
    chain,
    client,
  });
  const { data: allValidListings, isLoading: isLoadingValidListings } =
    useReadContract(getAllValidListings, {
      contract: marketplaceContract,
      queryOptions: { enabled: data && data.length > 0 },
    });
  const listings = allValidListings?.length
    ? allValidListings.filter(
        (item) =>
          item.assetContractAddress.toLowerCase() ===
            contract.address.toLowerCase() &&
          item.creatorAddress.toLowerCase() === address.toLowerCase()
      )
    : [];


    return (
       <div className={styles.container}>

        <Box px={{ lg: "50px", base: "20px" }} w={"100%"} mt={"50px"} mb={"70px"}>
          <Flex direction={{ lg: "row", md: "column", sm: "column" }} gap={15} w={"100%"} justifyContent={"center"}>
            <Img
              src={ensAvatar ?? blo(address as `0x${string}`)}
              w="30px" h="30px"  m={"5px"}
              rounded="50px" />
            <Box my="auto">
              <Heading>{ensName ?? ""}</Heading>
              <Text fontSize={"12px"} fontWeight={"sm"}>{shortenAddress(address)}</Text>
            </Box>
          </Flex>

          <Flex direction={{ lg: "row", base: "column" }} gap="30" m="20px" w={"100%"} p={"10px"} justifyContent={"center"}>
            <ProfileMenu
              selectedCollection={selectedCollection}
              setSelectedCollection={setSelectedCollection} />

          </Flex>
          <Flex direction={{ lg: "row", base: "column" }} w={"100%"} p={"10px"} justifyContent={"center"}>

            {isLoadingOwnedNFTs ? (
              <Box>
                <Text></Text>
              </Box>) : (<Box></Box>)}

            <Tabs 
              variant="soft-rounded"
              onChange={(index) => setTabIndex(index)}
              isLazy
              defaultIndex={0}
            >
              <TabList>
                <Tab fontSize={"10px"} p={"10px 20px 10px 20px"} m={"5px"} backgroundColor={"#131418"} border="1px solid rgba(255, 255, 255, 0.1)" borderRadius="5px">Owned ({data?.length})</Tab>
                <Tab fontSize={"10px"} p={"10px 20px 10px 20px"} m={"5px"} backgroundColor={"#131418"} border="1px solid rgba(255, 255, 255, 0.1)" borderRadius="5px">Listings ({listings.length || 0})</Tab>
                
                {/* <Tab>Auctions ({allAuctions?.length || 0})</Tab> */}
              </TabList>
            </Tabs>


          </Flex>


          <Link display={"flex"} justifyContent={"center"}  
            href={`/collection/${selectedCollection.chain.id}/${selectedCollection.address}`}
            color="#818183"
            fontSize={"12px"}
          >
            View collection <ExternalLinkIcon mx="5px" mt="5px" color={"white"}/>

          </Link>

          <SimpleGrid columns={6} spacing={10} justifyItems={"center"} m="10px 200px 10px 200px" >
            {tabIndex === 0 ? (
              <>
                {data && data.length > 0 ? (
                  <>
                    {data?.map((item) => (
                      <OwnedItem
                        key={item.id.toString()}
                        nftCollection={contract}
                        nft={item} />
                    ))}
                  </>
                ) : (
                  <Box>
                    <Text m="10px"  align={"left"} fontSize={"12px"}>
                      {isYou
                        ? "You"
                        : ensName
                          ? ensName
                          : shortenAddress(address)}{" "}
                      {isYou ? "do" : "does"} not own any NFT in this
                      collection
                    </Text>
                  </Box>
                )}
              </>
            ) : (
              <>
                {listings && listings.length > 0 ? (
                  <>
                    {listings?.map((item) => (
                      <Box
                        key={item.id}
                        rounded="12px"
                        as={Link}
                        href={`/collection/${contract.chain.id}/${contract.address}/token/${item.asset.id.toString()}`}
                        _hover={{ textDecoration: "none" }}
                        w={200}
                        flexWrap={"wrap"}

                      >
          <Flex direction="column" border="1px solid rgba(255, 255, 255, 0.1)" borderRadius="10px"  m={"30px"} backgroundColor={"rgba(255, 255, 255, 0.1)"}>
          <MediaRenderer width="140px" height="140px"  style={{
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
                  </>
                ) : (
                  <Box m={"30px"} fontSize={"12px"}> 
                    You don't have any listing with this collection
                  </Box>
                )}
              </>
            )}
          </SimpleGrid>

        </Box>
        </div>
  );
}
