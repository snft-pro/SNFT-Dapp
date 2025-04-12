import { NATIVE_TOKEN_ICON_MAP, Token } from "@/consts/supported_tokens";
import { useMarketplaceContext } from "@/hooks/useMarketplaceContext";
import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image,
  useToast,
  Box,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { NATIVE_TOKEN_ADDRESS, sendAndConfirmTransaction } from "thirdweb";
import {
  isApprovedForAll as isApprovedForAll1155,
  setApprovalForAll as setApprovalForAll1155,
} from "thirdweb/extensions/erc1155";
import {
  isApprovedForAll as isApprovedForAll721,
  setApprovalForAll as setApprovalForAll721,
} from "thirdweb/extensions/erc721";
import { createListing } from "thirdweb/extensions/marketplace";
import {
  useActiveWalletChain,
  useSwitchActiveWalletChain,
} from "thirdweb/react";
import type { Account } from "thirdweb/wallets";
import styles from "@/app/styles/Home.module.css";

type Props = {
  tokenId: bigint;
  account: Account;
};

export function CreateListing(props: Props) {
  const priceRef = useRef<HTMLInputElement>(null);
  const qtyRef = useRef<HTMLInputElement>(null);
  const { tokenId, account } = props;
  const switchChain = useSwitchActiveWalletChain();
  const activeChain = useActiveWalletChain();
  const [currency, setCurrency] = useState<Token>();
  const toast = useToast();

  const {
    nftContract,
    marketplaceContract,
    refetchAllListings,
    type,
    supportedTokens,
  } = useMarketplaceContext();
  const chain = marketplaceContract.chain;

  const nativeToken: Token = {
    tokenAddress: NATIVE_TOKEN_ADDRESS,
    symbol: chain.nativeCurrency?.symbol || "NATIVE TOKEN",
    icon: NATIVE_TOKEN_ICON_MAP[chain.id] || "",
  };

  const options: Token[] = [nativeToken].concat(supportedTokens);

  return (
    <>
      <Flex  >
      {type === "ERC1155" ? (
          <>
            <Flex  className={styles.nftpag}
            >
              <Box >
                <Text>Price</Text>
                <Input
                  type="number"
                  ref={priceRef}
                  placeholder="Enter a price"
                />
              
                <Text>Quantity</Text>
                <Input
                  type="number"
                  ref={qtyRef}
                  defaultValue={1}
                  placeholder="Quantity to sell"
                />
              </Box>
            </Flex>
          </>
        ) : (
          <>
          
            <Input className={styles.coinInput}
              type="number"
              ref={priceRef}
              placeholder="0.00 "
            />
          </>
        )}
        <Menu >
          <MenuButton  className={styles.coinInput2}>
            {currency ? (
              <Flex >
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={currency.icon}
                  w={"25px"}
                  h={"25px"}
                  pb={"5px"}
                 
                />
                <Text  className={styles.coinlistbtutton}>{currency.symbol}</Text>
              </Flex>
            ) : (
              "Currency"
            )}
          </MenuButton>
          <MenuList  className={styles.coinList}>
            {options.map((token) => (
              <MenuItem
                minH="20px"
                key={token.tokenAddress}
                onClick={() => setCurrency(token)}
                className={styles.MenuList}
              >
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={token.icon}
                  ml="5px"
                  mr="10px"
                  w={"20px"}
                  h={"20px"}
                 
                />
                <Text  className={styles.deopdescription}>{token.symbol}</Text>
                {token.tokenAddress.toLowerCase() ===
                  currency?.tokenAddress.toLowerCase() && (
                  <CheckIcon ml="auto" />
                )}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      
        
        <Button className={styles.listbutton}
          isDisabled={!currency}
          onClick={async () => {
            const value = priceRef.current?.value;
            if (!value) {
              return toast({
                title: "Please enter a price for this listing",
                status: "error",
                isClosable: true,
                duration: 5000,
              });
            }
            if (!currency) {
              return toast({
                title: `Please select a currency for the listing`,
                status: "error",
                isClosable: true,
                duration: 5000,
              });
            }
            if (activeChain?.id !== nftContract.chain.id) {
              await switchChain(nftContract.chain);
            }
            const _qty = BigInt(qtyRef.current?.value ?? 1);
            if (type === "ERC1155") {
              if (!_qty || _qty <= 0n) {
                return toast({
                  title: "Error",
                  description: "Invalid quantity",
                  status: "error",
                  isClosable: true,
                  duration: 5000,
                });
              }
            }

            // Check for approval
            const checkApprove =
              type === "ERC1155" ? isApprovedForAll1155 : isApprovedForAll721;

            const isApproved = await checkApprove({
              contract: nftContract,
              owner: account.address,
              operator: marketplaceContract.address,
            });

            if (!isApproved) {
              const setApproval =
                type === "ERC1155"
                  ? setApprovalForAll1155
                  : setApprovalForAll721;

              const approveTx = setApproval({
                contract: nftContract,
                operator: marketplaceContract.address,
                approved: true,
              });

              await sendAndConfirmTransaction({
                transaction: approveTx,
                account,
              });
            }

            const transaction = createListing({
              contract: marketplaceContract,
              assetContractAddress: nftContract.address,
              tokenId,
              quantity: type === "ERC721" ? 1n : _qty,
              currencyContractAddress: currency?.tokenAddress,
              pricePerToken: value,
            });

            await sendAndConfirmTransaction({
              transaction,
              account,
            });
            refetchAllListings();
          }}
        >
          List
        </Button>
      </Flex>
    </>
  );
}
