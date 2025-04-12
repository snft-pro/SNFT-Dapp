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
import Image from "next/image";


const GaslessHome: React.FC = () => {
	const account = useActiveAccount();

	return (
		<div className={styles.container}>

				<div className={styles.faucetpage}>
					<p className={styles.erc20staketitle}>Soneium</p>
					<br />

					<a
						className={styles.deopdescription}
						target="_blank"
						href="https://bridge.soneium.org/en/testnet"
					>
						Bridge
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
	chain:  defineChain(1946),
	address: "0x34827F8f938b86283dE224831a6885F2248ab7AF",
});
const ERC1155 = getContract({
	client: client,
	chain:  defineChain(1946),
	address: "0xc7EABa5225fcAf39612E3f9D91986676dc9B91eB",
});
const ERC20 = getContract({
	client: client,
	chain:  defineChain(1946),
	address: "0xA7b758C97eCDD1f7f94f68fB0b77Fb0B27e33c4d",
});
	return (
		<div className={styles.faucetmintbtn}>

			
		<TransactionButton
		style={{width: "200px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}

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
		style={{width: "200px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}
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
		style={{width: "200px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}
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
	chain:  defineChain(1946),
	address: "0x34827F8f938b86283dE224831a6885F2248ab7AF",
}),
owner: WalletAddress || "",
}
 );
 const {data: ERC1155Balances} = useReadContract(
	balanceERC1155,
	{
		contract: getContract({
		client: client,
		chain:  defineChain(1946),
		address: "0xc7EABa5225fcAf39612E3f9D91986676dc9B91eB",
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
			chain:  defineChain(1946),
			address: "0xA7b758C97eCDD1f7f94f68fB0b77Fb0B27e33c4d",
		}),
		address: WalletAddress || ""
		}
		 );

	return (
		<div className={styles.faucetmintbtn2}>

			


			<p className={styles.Faucets}>ERC721 Balances: {WalletAddress ? ERC721Balances?.toString() : "0"}</p>
			
			<p className={styles.Faucets}>ERC1155 Balances: {WalletAddress ? ERC1155Balances?.toString() : "0"}</p>
			
			<p className={styles.Faucets}>ERC20 Balances: {WalletAddress ? toEther(ERC20Balances || 0n) : "0"}</p>
		
		</div>
		
		
							
	)
};
export default GaslessHome;
