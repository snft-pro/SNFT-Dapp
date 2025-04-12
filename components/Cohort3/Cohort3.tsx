"use client";
import React from "react";
import { claimTo as claimERC1155, totalSupply, getNFT} from "thirdweb/extensions/erc1155";
import {MediaRenderer, TransactionButton,useActiveAccount,useReadContract,} from "thirdweb/react";
import { client } from "@/app/client";
import { defineChain, getContract } from "thirdweb";
import styles from "@/app/styles/Home.module.css";
const Cohort3: React.FC = () => {
	const account = useActiveAccount();
	const chain = defineChain( 11155420 );

const contract = getContract({
    client: client,
    chain: chain,
    address: "0x66E75786Fb49072B5725cc48b594f9cA647192A9"
  });

  const { data: nft } = useReadContract(
	getNFT,
	{
	  contract: contract,
	  tokenId: 0n,
	}
  );
const { data: NftMetadata, isLoading: isNftMetadataLaoding } = useReadContract( getNFT,
    {
		contract: contract,
		tokenId: 0n
	}
  );
	return (

	<div className={styles.operc1155}>			
	<MediaRenderer 
	client={client}
	src={nft?.metadata.animation_url}
	style={{ width: "auto", height: "auto",border: "1px solid #9693972a", borderRadius: "10px", 
		backgroundImage: "linear-gradient(90deg, rgba(71, 7, 71, 0.308) 0%, rgba(248, 23, 173, 0.205) 100%)", padding: "5px" }}
	/>
     {isNftMetadataLaoding ? (
	 <p className={styles.operc1155title}>Loading...</p>
	 ) : (
	<>
	
     <h2  className={styles.operc1155title}>{nft?.metadata?.name} </h2>
	 <h2  className={styles.operc1155title}>Only One </h2>
	 
	 </>)}
	<ClaimButton WalletAddress={account?.address || ""} />
	<NFTSupply />
	</div>
	);
};

type WalletAddressProps = {
	WalletAddress?: string;
};
const ClaimButton: React.FC<WalletAddressProps> = ({WalletAddress}) => {
	const ERC1155 = getContract({
		client: client,
		chain:  defineChain(11155420),
		address: "0x66E75786Fb49072B5725cc48b594f9cA647192A9",
	});
	return (
		<div className={styles.evantmintbtn}>
        <TransactionButton
		    style={{width: "50px", height: "30px", 
			backgroundImage: "linear-gradient(90deg, rgba(68, 11, 70, 0.925) 0%, rgb(225, 39, 241) 100%)",
			border: "1px solid #9693972a",
			borderRadius: "10px",
			color: "#e8ebe9e3"}}
		 transaction={() =>
		 claimERC1155({
		 contract: ERC1155,
		 to: WalletAddress || "",
		 tokenId: 0n,
		 quantity: 1n,
		})}
		onError={(error) => {
			alert(`Error: ${error.message}`);
		}} 
		onTransactionConfirmed={async () => {
			alert("Claim successful!");
		}}
		>Claim </TransactionButton>
		</div>
		
	)
};


const NFTSupply: React.FC = () => {
	const {data: claimedSupply} = useReadContract(
	   totalSupply,
	   {
		   contract: getContract({
		   client: client,
		   chain:  defineChain(11155420),
		   address: "0x66E75786Fb49072B5725cc48b594f9cA647192A9",
	   }),
	   id: 0n,
	   }
		);
return (
<p className={styles.operc1155title}> {claimedSupply?.toString()}/100 minted</p> 				   
)
};

export default Cohort3;


