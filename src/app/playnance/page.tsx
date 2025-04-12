'use client';

import { MediaRenderer, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { client } from "@/app/client";
import { defineChain, getContract, toEther } from "thirdweb";
import { getContractMetadata } from "thirdweb/extensions/common";
import { claimTo, getActiveClaimCondition, getTotalClaimedSupply, nextTokenIdToMint } from "thirdweb/extensions/erc721";
import { useState } from "react";
import Link from "next/link";
import styles from "@/app/styles/Home.module.css";
import Image from "next/image";
import { playblock } from "@/consts/chains";




export default function Home() {
  const account = useActiveAccount();

  // Replace the chain with the chain you want to connect to
  const chain = playblock;

  const [quantity, setQuantity] = useState(1);

  // Replace the address with the address of the deployed contract
  const contract = getContract({
	client: client,
	chain: chain,
	address: "0x13F9EE06C48054E41129Ae1b49CeD953F51dCF5c"
  });

  const { data: contractMetadata, isLoading: isContractMetadataLaoding } = useReadContract( getContractMetadata,
	{ contract: contract }
  );

  const { data: claimedSupply, isLoading: isClaimedSupplyLoading } = useReadContract( getTotalClaimedSupply,
	{ contract: contract}
  );

  const { data: totalNFTSupply, isLoading: isTotalSupplyLoading } = useReadContract( nextTokenIdToMint,
	{ contract: contract }
  );

  const { data: claimCondition } = useReadContract( getActiveClaimCondition,
	{ contract: contract }
  );

	const getPrice = (quantity: number) => {
	const pricePerToken = claimCondition?.pricePerToken;
	if (!pricePerToken) return 0; // or some other default value
  
	const pricePerTokenString = pricePerToken.toString();
	const parsedPricePerToken = parseFloat(pricePerTokenString);
	if (isNaN(parsedPricePerToken)) {
	  console.error(`Invalid pricePerToken value: ${pricePerTokenString}`);
	  return 0; // or some other default value
	}
  
	const total = Math.floor(quantity * parsedPricePerToken);
	if (isNaN(total)) {
	  console.error(`Invalid total value: ${total}`);
	  return 0; // or some other default value
	}
  
	return toEther(BigInt(total));
  }

  return (
	
			  <main className={styles.container}>
				  <div className={styles.droppage}>
					  <div className={styles.dropdata}>
						  {isContractMetadataLaoding ? (
							  <p>Loading...</p>
						  ) : (
							  <>

								  <h2  className={styles.deoptitle}>
									  {contractMetadata?.name}
								  </h2>
								  <br />
								  <br />
								  <p  className={styles.deopdescription2}>
									  {contractMetadata?.description}
								  </p>
								  <br />
								  <br />
							  </>
						  )}
						

						  <div className={styles.dropsocial}>

						  <Link href="https://www.playnance.com/" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/icons/we.png"
									  width={40}
									  height={40}
									  alt="" />
							  </Link>

							  <Link href="https://www.linkedin.com/company/playnance/mycompany" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/icons/in.png"
									  width={40}
									  height={40}
									  alt="" />
							  </Link>

							  <Link href="https://twitter.com/Playnancetech" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/icons/tw.png"
									  width={40}
									  height={40}
									  alt="" />
							  </Link>
							  <Link href="https://www.playnance.com/gas-station.html" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/pic/image-06.jpg"
									  width={35}
									  height={35}
									  alt="" />
							  </Link>
							 
							

						  </div>
					  </div>

					  <div className={styles.dropmintcard}>

						  <MediaRenderer 
							  client={client}
							  src={contractMetadata?.image}
							  style={{ width: "220px", height: "230px", border: "1px solid rgba(24, 25, 30, 0.29)",  borderRadius: "20px",  backgroundColor: "rgba(24, 25, 30, 0.18)"}}
						  />
						  <br />
						  <div className={styles.dropmint}>

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
					   style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}
	
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
							
							  {`Mint NFT (${getPrice(quantity)} PBG)`}
						  </TransactionButton>
						  {isClaimedSupplyLoading || isTotalSupplyLoading ? (
							  <p>Loading...</p>
							  
						  ) : (
							<><br />
							<p className={styles.deopdescription}>
										  NFT Minted: {claimedSupply?.toString()}
									  </p></>
						  )}
						  </div>
						 
						 
					  </div>



				  </div>

			  </main>
  );
}
