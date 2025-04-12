import { client } from "@/app/client";
import { NFT, prepareContractCall } from "thirdweb";
import { MediaRenderer, TransactionButton } from "thirdweb/react";
import { NFT_CONTRACT, STAKING_CONTRACT } from "@/../utils/passstakewm";
import { useState } from "react";
import { approve } from "thirdweb/extensions/erc721";
import styles from "@/app/styles/Home.module.css";

type OwnedNFTsProps = {
    nft: NFT;
    refetch: () => void;
    refecthStakedInfo: () => void;
};

export const NFTCard = ({ nft, refetch, refecthStakedInfo }: OwnedNFTsProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isApproved, setIsApproved] = useState(false);

    return (
        <div className={styles.nftstakecard}>
            <MediaRenderer
                client={client}
                src={nft.metadata.image}
                style={{
                    borderRadius: "20px",
                    marginBottom: "10px",
                    height: "200px",
                    width: "250px",
                    objectFit: "cover"}}
            />
            <p className={styles.deopdescription}>{nft.metadata.name}</p>
            <button
                onClick={() => setIsModalOpen(true)}
                style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff", borderRadius: "15px"}}
            >Stake</button>
            {isModalOpen && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    backgroundColor: "#131418",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        minWidth: "300px",
                        backgroundColor: "#18191e",
                        padding: "20px",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "100%"
                        }}>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff", borderRadius: "15px"}}
                                >Close</button>
                        </div>
                        <br/>
                        <h3 className={styles.deopdescription}>You about to stake:</h3>
                        <br/>
                        <MediaRenderer
                            client={client}
                            src={nft.metadata.image}
                            style={{
                                borderRadius: "20px",
                                marginBottom: "10px",
                                height: "200px",
                                width: "250px",
                                objectFit: "cover"}}
                        />
                         <br/>
                        {!isApproved ? (
                            <TransactionButton
                                transaction={() => (
                                    approve({
                                        contract: NFT_CONTRACT,
                                        to: STAKING_CONTRACT.address,
                                        tokenId: nft.id
                                    })
                                )}
                                style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}
                                onTransactionConfirmed={() => setIsApproved(true)}
                            >Approve</TransactionButton>
                        ) : (
                            <TransactionButton
                                transaction={() => (
                                    prepareContractCall({
                                        contract: STAKING_CONTRACT,
                                        method: "stake",
                                        params: [[nft.id]]
                                    })
                                )}
                                onTransactionConfirmed={() => {
                                    alert("Staked!");
                                    setIsModalOpen(false);
                                    refetch();
                                    refecthStakedInfo();
                                }}
                                style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}
                            >Stake</TransactionButton>
                        )}
                        
                    </div>
                </div>
            )}
        </div>
    )
};