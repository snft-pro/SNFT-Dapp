"use client";
import React from "react";
import styles from "@/app/styles/Home.module.css";
import { client } from "@/app/client";
import { claimTo as claimERC20, balanceOf as balanceERC20 } from "thirdweb/extensions/erc20";

import {
	TransactionButton,
	useActiveAccount,
	useReadContract,
} from "thirdweb/react";
import { defineChain, getContract, toEther } from "thirdweb";

const GaslessHome: React.FC = () => {
	const account = useActiveAccount();

	return (
		<div className={styles.container}>
				<div className={styles.faucetpage}>
		 <p className={styles.faucettitle}>SNFT ERC-404</p>	
		 <br/>
		 <p className={styles.deopdescription}>Claim 3000 Pool ERC20 Tokens "P4" for free, <br/>to start swap them for SNFT ERC404 "S4" </p>	
			<br />
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


const ERC20 = getContract({
	client: client,
	chain:  defineChain(137),
	address: "0xfD5854bc8B26aD3015cb3710315c085291c4354C",
});
	return (
		<div className="flex flex-row gap-4 md:gap-8">
		
		<TransactionButton
		style={{width: "220px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}

		 transaction={() =>
		 claimERC20({
		 contract: ERC20,
		 to: WalletAddress || "",
		 quantity: "3000"
		})}
		onError={(error) => {
			alert(`Error: ${error.message}`);
		}} 
		onTransactionConfirmed={async () => {
			alert("Claim successful!");
		}}
		>Claim Pool Tokens</TransactionButton>
		

		</div>
	)
};

	

const WalletBalances: React.FC<WalletAddressProps> = ({WalletAddress}) => {

	 const {data: ERC20Balances} = useReadContract(
		balanceERC20,
		{
			contract: getContract({
			client: client,
			chain:  defineChain(137),
			address: "0xfD5854bc8B26aD3015cb3710315c085291c4354C",
		}),
		address: WalletAddress || ""
		}
		 );

	return (
		<div className="footer3">
			<br/>
		<br/>
		<br/>
		
		<p className={styles.deopdescription}>P4 Balances: {WalletAddress ? toEther(ERC20Balances || 0n) : "0"} </p>  
		<br/>
	</div>
	
												
	)
};
export default GaslessHome;
