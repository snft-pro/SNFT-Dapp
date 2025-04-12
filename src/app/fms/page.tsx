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
import { getContract, toEther } from "thirdweb";
import styles from "@/app/styles/Home.module.css";
import {
	Image,
	Link,
  } from "@chakra-ui/react";
  import { FMS } from "@/app/../consts/chains";


const GaslessHome: React.FC = () => {
	const account = useActiveAccount();

	return (
			<div className={styles.container}>
				<div className={styles.faucetpage2}>
				<Image justifyItems={"center"} border="1px solid rgba(255, 255, 255, 0.1)" style={{ borderRadius: "20px", marginBottom: "10px" }} width="400px" height="200px"
                  padding="5px" src={"/pic/fms.png"} />
				  <br/>
			<p className={styles.faucettitle}>FMS Testnet</p>
			<br />
			<div className={styles.dropsocial2}>
							  <Link href="https://fmtlol.com/" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/icons/we.png"
									  width={40}
									  height={40}
									  alt="" />
							  </Link>

							  <Link href="https://www.linkedin.com/company/fmtlol/" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/icons/in.png"
									  width={40}
									  height={40}
									  alt="" />
							  </Link>

							  <Link href="https://x.com/fmtlol" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/icons/tw.png"
									  width={40}
									  height={40}
									  alt="" />
							  </Link>

							  <Link href="https://t.me/fmtlol" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/icons/tel.png"
									  width={40}
									  height={40}
									  alt="" />
							  </Link>

							 
							 
							  <Link href="https://thirdweb.com/fms" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								  <Image
									  src="/pic/image-06.jpg"
									  width={30}
									  height={30}
									  alt="faucet" />
							  </Link>
						  </div>

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

	const ERC721 = getContract({
		client: client,
		chain:  FMS,
		address: "0x3E14ca10E0Dc2cf041d2Fd12868B9D71916c4D4e",
	});
	const ERC1155 = getContract({
		client: client,
		chain:  FMS,
		address: "0x3F522473Dd6433c30d44Fd124b52A603F5C2576E",
	});
	const ERC20 = getContract({
		client: client,
		chain:  FMS,
		address: "0x79a7D2663067e4915c97F07013526bb774174133",
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
			chain:  FMS,
			address: "0x3E14ca10E0Dc2cf041d2Fd12868B9D71916c4D4e",
		}),
		owner: WalletAddress || "",
		}
		 );
		 const {data: ERC1155Balances} = useReadContract(
			balanceERC1155,
			{
				contract: getContract({
				client: client,
				chain:  FMS,
				address: "0x3F522473Dd6433c30d44Fd124b52A603F5C2576E",
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
					chain:  FMS,
					address: "0x79a7D2663067e4915c97F07013526bb774174133",
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
