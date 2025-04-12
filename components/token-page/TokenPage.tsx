import { client } from "@/consts/client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { balanceOf, getNFT as getERC1155 } from "thirdweb/extensions/erc1155";
import { getNFT as getERC721 } from "thirdweb/extensions/erc721";
import {
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";
import { NftAttributes } from "./NftAttributes";
import { CreateListing } from "./CreateListing";
import { useMarketplaceContext } from "@/hooks/useMarketplaceContext";
import dynamic from "next/dynamic";
import { NftDetails } from "./NftDetails";
import RelatedListings from "./RelatedListings";

import styles from "@/app/styles/Home.module.css";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const CancelListingButton = dynamic(() => import("./CancelListingButton"), {
  ssr: false,
});
const BuyFromListingButton = dynamic(() => import("./BuyFromListingButton"), {
  ssr: false,
});

type Props = {
  tokenId: bigint;
};

export function Token(props: Props) {
  const {
    type,
    nftContract,
    allAuctions,
    isLoading,
    contractMetadata,
    isRefetchingAllListings,
    listingsInSelectedCollection,
  } = useMarketplaceContext();
  const { tokenId } = props;
  const account = useActiveAccount();

  const { data: nft, isLoading: isLoadingNFT } = useReadContract(
    type === "ERC1155" ? getERC1155 : getERC721,
    {
      tokenId: BigInt(tokenId),
      contract: nftContract,
      includeOwner: true,
    }
  );

  const { data: ownedQuantity1155 } = useReadContract(balanceOf, {
    contract: nftContract,
    owner: account?.address!,
    tokenId: tokenId,
    queryOptions: {
      enabled: !!account?.address && type === "ERC1155",
    },
  });

  const listings = (listingsInSelectedCollection || []).filter(
    (item) =>
      item.assetContractAddress.toLowerCase() ===
        nftContract.address.toLowerCase() && item.asset.id === BigInt(tokenId)
  );

  const auctions = (allAuctions || []).filter(
    (item) =>
      item.assetContractAddress.toLowerCase() ===
        nftContract.address.toLowerCase() && item.asset.id === BigInt(tokenId)
  );

  const allLoaded = !isLoadingNFT && !isLoading && !isRefetchingAllListings;

  const ownedByYou =
    nft?.owner?.toLowerCase() === account?.address.toLowerCase();

  return (
    

    <><div className={styles.container}>
      <Flex className={styles.listnftpage}>
        <Box>
          <Flex className={styles.nftpag}>

            <Flex>

              <Flex className={styles.nftcard}>

                <MediaRenderer
                  client={client}
                  src={nft?.metadata.image}
                  style={{ width: "400px", height: "400px", borderRadius: "16px", marginBottom: "20px", marginRight: "100px" }} />
                <Box className={styles.listnftpage}>

                  {type === "ERC1155" ? (
                    <>
                      {account && ownedQuantity1155 && (
                        <>
                          <Text>You own</Text>
                          <Heading>{ownedQuantity1155.toString()}</Heading>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                    </>
                  )}
                  {account &&
                    nft &&
                    (ownedByYou || (ownedQuantity1155 && ownedQuantity1155 > 0n)) && (
                      <CreateListing tokenId={nft?.id} account={account} />
                    )}


                </Box>
                <Flex className={styles.colpag}>


                  <Text className={styles.listtitle}>Collection</Text>
                  <Heading className={styles.listtitle}>{contractMetadata?.name}</Heading>

                  <Link className={styles.listtitle}
                    color="gray"
                    href={`/collection/${nftContract.chain.id}/${nftContract.address}`}
                  >

                    <ExternalLinkIcon mx="20px" color={"white"} />
                  </Link>
                </Flex>
                <Flex className={styles.colpag}>
                  <Text className={styles.listtitle}># {nft?.id.toString()}</Text>
                  <Heading className={styles.listtitle}>{nft?.metadata.name}</Heading>
                </Flex>
                <Flex className={styles.colpag}>

                  <Text className={styles.listtitle}>Current owner</Text>
                  <Heading className={styles.listtitle}>
                    {nft?.owner ? shortenAddress(nft.owner) : "N/A"}{" "}
                  </Heading>
                  {ownedByYou &&
                    <Text className={styles.listtitle}>(You)</Text>}
                </Flex>

              </Flex>


              <Accordion allowMultiple defaultIndex={[0, 1, 2]}>
                <AccordionItem>
                  <Flex>


                  </Flex>
                  <Text>
                    <AccordionButton className={styles.listnft2}>

                      <Box>
                        Listings ({listings.length})
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel className={styles.listnft3}>
                    {listings.length > 0 ? (
                      <TableContainer>

                        <Table className={styles.th2}
                          variant="simple"
                          sx={{ "th, td": { borderBottom: "none" } }}
                        >

                          <Thead>
                            {listings.map((item) => {
                              const listedByYou = item.creatorAddress.toLowerCase() ===
                                account?.address.toLowerCase();
                              return (
                                <Tr className={styles.priceList}
                                  key={item.id.toString()}>
                                  <Td>
                                    <Th className={styles.th2}>Price</Th>
                                    <Th className={styles.th2}>From</Th>

                                  </Td>
                                  {type === "ERC1155" && (
                                    <Td px={1}>
                                      <Text>{item.quantity.toString()}</Text>
                                    </Td>

                                  )}

                                  <Td>
                                    <Text className={styles.th2}>
                                      {item.currencyValuePerToken.displayValue}{" "}
                                      {item.currencyValuePerToken.symbol}
                                    </Text>

                                    <Text className={styles.td}>
                                      {item.creatorAddress.toLowerCase() ===
                                        account?.address.toLowerCase()
                                        ? "You"
                                        : shortenAddress(item.creatorAddress)}
                                    </Text>
                                  </Td>

                                </Tr>
                              );
                            })}
                          </Thead>
                          <Thead>
                            {listings.map((item) => {
                              const listedByYou = item.creatorAddress.toLowerCase() ===
                                account?.address.toLowerCase();
                              return (

                                <Tr className={styles.td} key={item.id.toString()}>
                                  <Td>{account && (
                                    <Td>
                                      {!listedByYou ? (
                                        <BuyFromListingButton
                                          account={account}
                                          listing={item} />
                                      ) : (
                                        <CancelListingButton
                                          account={account}
                                          listingId={item.id} />
                                      )}
                                    </Td>
                                  )}</Td>
                                </Tr>
                              );
                            })}
                          </Thead>
                        </Table>
                      </TableContainer>
                    ) : (
                      <Text>not listed for sale</Text>
                    )}
                  </AccordionPanel>
                </AccordionItem>
                {nft?.metadata.description && (
                  <AccordionItem>

                    <Text>
                      <AccordionButton className={styles.listnft2}>
                        <Box textAlign="left" w={"550px"}>
                          Description
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </Text>
                    <AccordionPanel className={styles.listnft3} pb={10}>
                      <Text className={styles.listdescription}>{nft.metadata.description}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                )}

                {nft?.metadata?.attributes &&
                  // @ts-ignore TODO FIx later
                  nft?.metadata?.attributes.length > 0 && (
                    <NftAttributes attributes={nft.metadata.attributes} />
                  )}

                {nft && <NftDetails nft={nft} />}
              </Accordion>
            </Flex>

          </Flex>
        </Box>
      </Flex>

    </div>
    
    <div className={styles.container}>
        <Accordion
          mt="30px"
          sx={{ container: {} }}
          defaultIndex={[0, 1]}
          allowMultiple
        >

          <RelatedListings excludedListingId={listings[0]?.id ?? -1n} />
        </Accordion>
      </div></>
  );
}

function getExpiration(endTimeInSeconds: bigint) {
  // Get the current date and time
  const currentDate = new Date();

  // Convert seconds to milliseconds (bigint)
  const milliseconds: bigint = endTimeInSeconds * 1000n;

  // Calculate the future date by adding milliseconds to the current date
  const futureDate = new Date(currentDate.getTime() + Number(milliseconds));

  // Format the future date
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    timeZoneName: "short",
  };
  const formattedDate = futureDate.toLocaleDateString("en-US", options);
  return formattedDate;
}
