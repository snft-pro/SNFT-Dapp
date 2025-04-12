'use client';

import { MediaRenderer, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { client } from "@/app/client";
import { defineChain, getContract } from "thirdweb";
import { getContractMetadata } from "thirdweb/extensions/common";
import { claimTo, getTotalClaimedSupply, nextTokenIdToMint } from "thirdweb/extensions/erc721";
import { useState } from "react";
import styles from "@/app/styles/FreeNFT.module.css";
import { SNFT } from "@/app/../consts/chains";

export default function Home() {
  const account = useActiveAccount();

  // Replace the chain with the chain you want to connect to
  const chain = SNFT

  const [quantity, setQuantity] = useState(1);

  // Replace the address with the address of the deployed contract
  const contract = getContract({
    client: client,
    chain: chain,
    address: "0x4ABeb468bF80FA3924D9943055be9e252B312683"
  });

  const { data: contractMetadata, isLoading: isContractMetadataLaoding } = useReadContract( getContractMetadata,
    { contract: contract }
  );

  const { data: claimedSupply, isLoading: isClaimedSupplyLoading } = useReadContract( getTotalClaimedSupply,
    { contract: contract}
  );

  const { isLoading: isTotalSupplyLoading } = useReadContract( nextTokenIdToMint,
    { contract: contract }
  );



  return (
			 
				  <div className={styles.TESTNET}>
					<MediaRenderer 
							  client={client}
							  src={contractMetadata?.image}
							  style={{ width: "auto", height: "150px", borderRadius: "20px", padding: "5px"}}/>


						  {isContractMetadataLaoding ? (
							  <p className={styles.operc1155title}>Loading...</p>
						  ) : (
							  <>

								  <h2  className={styles.operc1155title}>
									  {contractMetadata?.name}
								  </h2>
								 
								
								 
							  </>
						  )}
					
						  
						
						 

						  <div className={styles.dropmintbtn}>


							  <button
								  className={styles.claimBtn}
								  onClick={() => setQuantity(Math.max(1, quantity - 1))}
							  >-</button>
							  
							  <input
								  value={quantity}
								  onChange={(e) => setQuantity(parseInt(e.target.value))}
								  className={styles.claimInput} />
							  
							  <button
								  className={styles.claimBtn}
								  onClick={() => setQuantity(quantity + 1)}
							  >+</button>

						  </div>

						  <TransactionButton
				                style={{width: "auto", height: "20px", 
								marginTop: "5px",
								backgroundColor: "#131418",
								border: "1px solid #9693972a",
								borderRadius: "10px",
								color: "#e8ebe9e3"}}
							    transaction={() => claimTo({
								contract: contract,
								to: account?.address || "",
								quantity: BigInt(quantity),
							  })}
							  onTransactionConfirmed={async () => {
								  alert("NFT Claimed!");
								  setQuantity(1);
							  } }
						  >
							
							  {`Claim `}
						  </TransactionButton>
						  {isClaimedSupplyLoading || isTotalSupplyLoading ? (
							  <p className={styles.operc1155title}>Loading...</p>
							  
						  ) : (
							<>
							<p className={styles.operc1155title}> {claimedSupply?.toString()} Minted</p></>
						  )}
						  </div>
						 
						 
					



			

  );
}
