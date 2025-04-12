'use client';

import { useActiveAccount, useReadContract } from "thirdweb/react";
import { NFT_CONTRACT, STAKING_CONTRACT } from  "@/../utils/passnftstake";
import { NFT } from "thirdweb";
import { useEffect, useState } from "react";
import { getNFTs, ownerOf, totalSupply } from "thirdweb/extensions/erc721";
import { NFTCard } from "./NFTCard";
import { StakedNFTCard } from "./StakedNFTCard";
import styles from "@/app/styles/Home.module.css";
import { Box, Flex } from "@chakra-ui/react";
export const Staking = () => {
    const account = useActiveAccount();

    const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);
    
    const getOwnedNFTs = async () => {
        let ownedNFTs: NFT[] = [];

        const totalNFTSupply = await totalSupply({
            contract: NFT_CONTRACT,
        });
        const nfts = await getNFTs({
            contract: NFT_CONTRACT,
            start: 0,
            count: parseInt(totalNFTSupply.toString()),
        });
        
        for (let nft of nfts) {
            const owner = await ownerOf({
                contract: NFT_CONTRACT,
                tokenId: nft.id,
            });
            if (owner === account?.address) {
                ownedNFTs.push(nft);
            }
        }
        setOwnedNFTs(ownedNFTs);
    };
    
    useEffect(() => {
        if(account) {
            getOwnedNFTs();
        }
    }, [account]);

    const {
        data: stakedInfo,
        refetch: refetchStakedInfo,
    } = useReadContract({
        contract: STAKING_CONTRACT,
        method: "getStakeInfo",
        params: [account?.address || ""],
    });
    
    if(account) {
        return (
            <Flex >
                <Box className={styles.nftstakepage} >
                    <Flex direction="column" gap="40">
                        <Flex
                            direction="row"
                            flexWrap="wrap"
                            grow="20"
                            justifyItems="center"
                            gap="20px"
                            alignItems="center"
                            maxW="300px"
                        >
                            {ownedNFTs && ownedNFTs.length > 0 ? (

                                ownedNFTs.map((nft) => (
                                    <NFTCard
                                        key={nft.id}
                                        nft={nft}
                                        refetch={getOwnedNFTs}
                                        refecthStakedInfo={refetchStakedInfo} />
                                ))
                            ) : (
                                
                                <h2 className={styles.deopdescription}>You own 0 NFTs</h2>
                            )}

                        </Flex>
                    </Flex>
                </Box>

                <Box className={styles.nftstakepage} >
               
                    
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "500px" }}>
                        {stakedInfo && stakedInfo[0].length > 0 ? (
                            stakedInfo[0].map((nft: any, index: number) => (
                                <StakedNFTCard
                                    key={index}
                                    tokenId={nft}
                                    refetchStakedInfo={refetchStakedInfo}
                                    refetchOwnedNFTs={getOwnedNFTs} />
                            ))
                        ) : (
                            <h2 className={styles.nftstakedescription}>No NFTs staked</h2>

                        )}

                    </div>

                    

                </Box>
                
            </Flex>
           
        );
    }
};