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
import {
	Image,
	Link,
	Text,
  } from "@chakra-ui/react";


const GaslessHome: React.FC = () => {
	const account = useActiveAccount();

	return (
		
			<div className={styles.container}>
				<div className={styles.faucetpage2}>
				<Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ borderRadius: "20px", marginBottom: "10px" }} width="400px" height="200px"
                  padding="10px" src={"/pic/uni.jpg"} />
				  <br/>
			<p className={styles.faucettitle}>Unichain Testnet</p>
			<br />
			<div className={styles.dropsocial2}>
							  <Link href="https://www.unichain.org/" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/icons/we.png"
									  width={40}
									  height={40}
									  alt="" />
							  </Link>

							  <Link href="https://x.com/unichain" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/icons/tw.png"
									  width={40}
									  height={40}
									  alt="" />
							  </Link>
							 
							  <Link href="https://testnet.brid.gg/unichain-sepolia?amount=&originChainId=11155111&token=ETH" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/pic/image-06.jpg"
									  width={30}
									  height={30}
									  alt="Bridge" />
							  </Link>
						  </div>

						  <br />

						  <div className={styles.dropsocial2}>


						  <a className={styles.erc20stakedescription2} href="/collection/1301/0x2823EABA33742a258A5E36A10c8dBc0905fDb37b"
						  >ERC721 Market</a>
						  
						 <a className={styles.erc20stakedescription2}  href="/uinstake"
						  >ERC721 Staking</a>

						  <a className={styles.erc20stakedescription2} target="_blank" href="https://app.uniswap.org/swap?chain=unichain&use=V3&inputCurrency=0x14af6F23Dad2eC2AaDf35494E7ce21bA4Aa90625"
						  >Trade ERC20/ETH</a>
						  
						 
						  </div><br />

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
		chain:  defineChain(1301),
		address: "0x2823EABA33742a258A5E36A10c8dBc0905fDb37b",
	});
	const ERC1155 = getContract({
		client: client,
		chain:  defineChain(1301),
		address: "0x0Ae9112C7368FD4e949486Bd60431954b1bBa09c",
	});
	const ERC20 = getContract({
		client: client,
		chain:  defineChain(1301),
		address: "0x14af6F23Dad2eC2AaDf35494E7ce21bA4Aa90625",
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
		 quantity: "1000"
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
			chain:  defineChain(1301),
			address: "0x2823EABA33742a258A5E36A10c8dBc0905fDb37b",
		}),
		owner: WalletAddress || "",
		}
		 );
		 const {data: ERC1155Balances} = useReadContract(
			balanceERC1155,
			{
				contract: getContract({
				client: client,
				chain:  defineChain(1301),
				address: "0x0Ae9112C7368FD4e949486Bd60431954b1bBa09c",
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
					chain:  defineChain(1301),
					address: "0x14af6F23Dad2eC2AaDf35494E7ce21bA4Aa90625",
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
