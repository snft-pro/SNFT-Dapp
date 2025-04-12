import { MediaRenderer, TransactionButton, useReadContract } from "thirdweb/react";
import { NFT_CONTRACT, STAKING_CONTRACT } from "@/../utils/sonicstakes";
import { getNFT } from "thirdweb/extensions/erc721";
import { client } from "@/app/client";
import { prepareContractCall } from "thirdweb";
import styles from "@/app/styles/Home.module.css";

type StakedNFTCardProps = {
    tokenId: bigint;
    refetchStakedInfo: () => void;
    refetchOwnedNFTs: () => void;
};

export const StakedNFTCard: React.FC<StakedNFTCardProps> = ({ tokenId, refetchStakedInfo, refetchOwnedNFTs }) => {
    const { data: nft } = useReadContract(
        getNFT,
        {
            contract: NFT_CONTRACT,
            tokenId: tokenId,
        }
    );
    
    return (
        <div className={styles.nftstakepage}>
             <div className={styles.nftstakecard}>
            <MediaRenderer
                client={client}
                src={nft?.metadata.image}
                style={{
                    borderRadius: "20px",
                    marginBottom: "10px",
                    height: "200px",
                    width: "250px",
                    objectFit: "cover"}}
            />
            <p className={styles.deopdescription}>{nft?.metadata.name}</p>
            <br/>
            <TransactionButton
                transaction={() => (
                    prepareContractCall({
                        contract: STAKING_CONTRACT,
                        method: "withdraw",
                        params: [[tokenId]]
                    })
                )}
                onTransactionConfirmed={() => {
                    refetchOwnedNFTs();
                    refetchStakedInfo();
                    alert("Withdrawn!");
                }}
                style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff", borderRadius: "15px"}}
            >Withdraw</TransactionButton>
            
        </div>
        </div>
    )
};