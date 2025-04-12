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




export default function Home() {
  const account = useActiveAccount();

  // Replace the chain with the chain you want to connect to
  const chain = defineChain( 137 );

  const [quantity, setQuantity] = useState(1);

  // Replace the address with the address of the deployed contract
  const contract = getContract({
    client: client,
    chain: chain,
    address: "0x7DaC98F96c8340Be795866719C145B0C0265F46e"
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
	const total = Math.floor(quantity * parseInt(claimCondition?.pricePerToken.toString() || "0"));
	return toEther(BigInt(total));
  }

  return (
	<><><div>
		  <p className={styles.container2}>
			  SNFT is only compatible with desktop browsers,<br />Please use a desktop browser to access it.</p>

	  </div><>

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
							  <Link href="https://www.linkedin.com/company/snft/" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/icons/in.png"
									  width={40}
									  height={40}
									  alt="" />
							  </Link>

							  <Link href="https://x.com/snftpro" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/icons/tw.png"
									  width={40}
									  height={40}
									  alt="" />
							  </Link>
							  <Link href="https://t.me/snftpro" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/icons/tel.png"
									  width={40}
									  height={40}
									  alt="" />
							  </Link>
							  <Link href="https://www.youtube.com/@snftpro" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/icons/y.png"
									  width={40}
									  height={40}
									  alt="" />
							  </Link>

						  </div>
					  </div>

					  <div className={styles.dropmintcard}>

						  <MediaRenderer 
							  client={client}
							  src={contractMetadata?.image}
							  style={{ width: "230px", height: "250px", border: "1px solid rgba(255, 255, 255, 0)",  borderRadius: "20px",  backgroundColor: "rgba(255, 255, 255, 0)"}}/>
						  
						  <br />
						  <div className={styles.dropmint}>

						

                              <TransactionButton
				       style={{width: "230px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}
	
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
							
							  {`Claim (0.5 POL)  `}
						  </TransactionButton>
						  {isClaimedSupplyLoading || isTotalSupplyLoading ? (
							  <p>Loading...</p>
							  
						  ) : (
							<><br />
							<p className={styles.deopdescription}>
										 NFT Minted: {claimedSupply?.toString()}/1000
									  </p></>
						  )}
						  </div>
						 
						 
					  </div>



				  </div>

			  </main></></></>
  );
}
