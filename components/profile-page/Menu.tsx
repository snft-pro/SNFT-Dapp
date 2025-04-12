import { NFT_CONTRACTS, type NftContract } from "@/consts/nft_contracts";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import type { Dispatch, SetStateAction } from "react";
import styles from "@/app/styles/Home.module.css";

type Props = {
  selectedCollection: NftContract;
  setSelectedCollection: Dispatch<SetStateAction<NftContract>>;
};

export function ProfileMenu(props: Props) {
  const { selectedCollection, setSelectedCollection } = props;
  return (
    <Box w={"100%"} >
      <Accordion alignItems={"center"} justifyContent={"center"} justifyItems={"center"}
        allowToggle
        defaultIndex={[0]}
       
      >
        <AccordionItem >
          <Text >
            <AccordionButton className={styles.listnft5}>
              <Box as="span"  >
                Collections
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Text>
          <AccordionPanel pb={5} display={"flex"}
          flexWrap={"wrap"}
                flexDirection={"row"}
                justifyItems={"center"}
                justifyContent={"center"}
                alignItems={"center"}
                marginEnd={"80px"}
                marginStart={"50px"}
                
               
                >
            {NFT_CONTRACTS.map((item) => (
              <Box
              w={"11%"}
              key={item.address}
              margin={"10px 5px 0px 5px"}
              as={Button}
              h="30px"
              display={"flex"}
              flexDirection={"row"}
              justifyItems={"left"}
              justifyContent={"left"}
              flexWrap={"wrap"}
              backgroundColor={"rgba(255, 255, 255, 0.1)"}
              alignItems={"left"}
              border={"1px solid rgba(255, 255, 255, 0.1)"}
              borderRadius="3px"
                
                opacity={item.address === selectedCollection.address ? 1 : 0.4}
                onClick={() => setSelectedCollection(item)}
              >
                <Flex direction="row" gap="1" justifyContent={"center"}>
                  <Image src={item.thumbnailUrl ?? ""} w="30px" h="30px" mb={"12px"} p={"5px"}/>
                  <Box m="10px" justifyItems={"center"} alignItems={"center"} justifyContent={"center"}>
                    <Text fontSize={"10px"} >{item.title ?? "Unknown collection"}  </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
