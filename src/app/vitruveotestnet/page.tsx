"use client";
import React from "react";
import { claimTo as claimERC721, balanceOf as balanceERC721 } from "thirdweb/extensions/erc721";
import { claimTo as claimERC1155, balanceOf as balanceERC1155 } from "thirdweb/extensions/erc1155";
import { claimTo as claimERC20, balanceOf as balanceERC20 } from "thirdweb/extensions/erc20";
import {
	TransactionButton,
	useActiveAccount,
	useReadContract,
} from "thirdweb/react";
import { client } from "@/app/client";
import { defineChain, getContract, toEther } from "thirdweb";
import styles from "@/app/styles/Home.module.css";



const GaslessHome: React.FC = () => {
	const account = useActiveAccount();

	return (
		<div className={styles.container}>

				<div className={styles.faucetpage}>
			<p className={styles.faucettitle}>Vitruveo Network</p>
			<br />
			
			<a
				className="gradientText2"
				target="_blank"
				href="https://faucet.vitruveo.xyz"
			>
			Faucet
			</a>
			<br />
			


			<ClaimButton WalletAddress={account?.address || ""} />
			<WalletBalances WalletAddress={account?.address || ""} />
			<br />
		</div>

		</div>

	
		
	);
};

type WalletAddressProps = {
	WalletAddress?: string;
};


const ClaimButton: React.FC<WalletAddressProps> = ({WalletAddress}) => {

	const ERC721 = getContract({
		client: client,
		chain:  defineChain(14333),
		address: "0xFF9FbA4d21Eb5387b916c48794804954eD53b632",
	});
	const ERC1155 = getContract({
		client: client,
		chain:  defineChain(14333),
		address: "0x392C493206A9cB44b769270d48083D9054A0F1C2",
	});
	const ERC20 = getContract({
		client: client,
		chain:  defineChain(14333),
		address: "0x765916d519cE4AcFAF5F56a7bcC72A627fDFC0aF",
	});

	return (
		<div className={styles.faucetmintbtn}>

			
		<TransactionButton
		style={{width: "220px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}

		 transaction={() =>
		 claimERC721({
		 contract: ERC721,
		 to: WalletAddress || "",
		 quantity: 1n,
		})}
		onError={(error) => {
			alert(`Error: ${error.message}`);
		}} 
		onTransactionConfirmed={async () => {
			alert("Claim successful!");
		}}
		>Claim ERC721</TransactionButton>

        <TransactionButton
		style={{width: "220px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}
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
		>Claim ERC1155 </TransactionButton>

		<TransactionButton
		style={{width: "220px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}
		 transaction={() =>
		 claimERC20({
		 contract: ERC20,
		 to: WalletAddress || "",
		 quantity: "100"
		})}
		onError={(error) => {
			alert(`Error: ${error.message}`);
		}} 
		onTransactionConfirmed={async () => {
			alert("Claim successful!");
		}}
		>Claim ERC20</TransactionButton>

		</div>
		
	)
};

const WalletBalances: React.FC<WalletAddressProps> = ({WalletAddress}) => {
	const {data: ERC721Balances} = useReadContract(
		balanceERC721,
		{
			contract: getContract({
			client: client,
			chain:  defineChain(14333),
			address: "0xFF9FbA4d21Eb5387b916c48794804954eD53b632",
		}),
		owner: WalletAddress || "",
		}
		 );
		 const {data: ERC1155Balances} = useReadContract(
			balanceERC1155,
			{
				contract: getContract({
				client: client,
				chain:  defineChain(14333),
				address: "0x392C493206A9cB44b769270d48083D9054A0F1C2",
			}),
			owner: WalletAddress || "",
				tokenId: 0n,
			}
			 );
			 const {data: ERC20Balances} = useReadContract(
				balanceERC20,
				{
					contract: getContract({
					client: client,
					chain:  defineChain(14333),
					address: "0x765916d519cE4AcFAF5F56a7bcC72A627fDFC0aF",
				}),
				address: WalletAddress || ""
				}
				 );

	return (
		<div className={styles.faucetmintbtn2}>

			


		<p className="gradientText1 m-2">ERC721 Balances: {WalletAddress ? ERC721Balances?.toString() : "0" }</p>
			
			<p className="gradientText1 m-2">ERC1155 Balances: {WalletAddress ? ERC1155Balances?.toString() : "0"}</p>
			
			<p className="gradientText1 m-2">ERC20 Balances: {WalletAddress ? toEther(ERC20Balances || 0n) : "0"}</p>
		
		</div>
							
	)
};
export default GaslessHome;
