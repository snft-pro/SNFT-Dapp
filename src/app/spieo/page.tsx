"use client";
import React, { useState } from "react";
import styles from "@/app/styles/Home.module.css";
import { client } from "@/app/client";
import { claimTo as claimERC20, balanceOf as balanceERC20, getActiveClaimCondition, totalSupply } from "thirdweb/extensions/erc20";
import { Link } from "@chakra-ui/next-js";
import {
  Image,
  Text,
} from "@chakra-ui/react";

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
				<div className={styles.ieopage2}>
					<div className={styles.ieodata2}>
						<Link href="#" className={`${styles.homeLink} ${styles.navLeft}`}>
							<Image
								src="/erc20-icons/sp.png"
								width={70}
								height={70}
								alt="" />
						</Link><br />
						<p className={styles.faucettitle}>SNFTPRO</p>
						<br />
						<p className={styles.ieodescription}>SP is the SNFT official ERC20 Token </p>
						<p className={styles.ieodescription}>TOTAL SUPPLY: 1.000.000 SP <br /> Available for sale:  600.000 SP <br /> Token Price: 0.5 POL</p>
						<br />
						<div className={styles.ieopsocial}>
							<Link href="https://docs.snft.pro/snftpro-token" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								TOKENOMICS
							</Link>
							<br />
							<Link color="white" href="https://polygonscan.com/token/0xD2e586Df315238E01c152eb60f87c8EbCB2D8b70" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
								Explorer
							</Link>
							<br />
							<Link color="white" href="https://app.uniswap.org/swap?chain=polygon&use=V3&inputCurrency=0x81773cFEA4f68216c4F20BDaaAAE8F73e7b16DF9&outputCurrency=0xD2e586Df315238E01c152eb60f87c8EbCB2D8b70" className={`${styles.homeLink} ${styles.navLeft}`} target="_blank" rel="noreferrer">
							    Swap SP/S
							</Link>
						</div>
						<br />

						<div className={styles.ieopsocial}>
							<Link color="white" href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
								<Image
									src="/icons/we.png"
									width={40}
									height={40}
									alt="" />
							</Link>

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
				</div>
				<div className={styles.ieocard}>

					<ClaimButton WalletAddress={account?.address || ""} />
					<Supply />
					<WalletBalances WalletAddress={account?.address || ""} />
				
				</div>

			</div>

		
		
	);
};

type WalletAddressProps = {
	WalletAddress?: string;
};


const ClaimButton: React.FC<WalletAddressProps> = ({WalletAddress}) => {
const [quantity, setQuantity] = useState(0);



const ERC20 = getContract({
	client: client,
	chain:  defineChain(137),
	address: "0xD2e586Df315238E01c152eb60f87c8EbCB2D8b70",
});

  const { data: claimCondition } = useReadContract( getActiveClaimCondition,
    { contract: ERC20 }
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
		<div >
			<div className={styles.ieocard}>
			<p className={styles.ieodescription}>Quantity</p>
			</div>
		
		<div className={styles.ieocard2}>




<button
								  className={styles.claimBtn}
								  onClick={() => setQuantity(Math.max(1, quantity - 1))}
							  >-</button>
							  
							  <input
								  value={quantity}
								  onChange={(e) => setQuantity(parseInt(e.target.value))}
								  className={styles.claimInput2} />
							  
							  <button
								  className={styles.claimBtn}
								  onClick={() => setQuantity(quantity + 1)}
							  >+</button>


</div>
<div className={styles.ieocard2}>
	
<TransactionButton
    style={{width: "30%", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}
    transaction={() =>
        claimERC20({
            contract: ERC20,
            to: WalletAddress || "",
            quantity: quantity.toString(), 
        })
    }
    onError={(error) => {
        alert(`Error: ${error.message}`);
    }} 
    onTransactionConfirmed={async () => {
        alert("Buy successful!");
    }}
>
{`Buy SP (${getPrice(quantity)} MATIC)`}

</TransactionButton>


</div>
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
			address: "0xD2e586Df315238E01c152eb60f87c8EbCB2D8b70",
		}),
		address: WalletAddress || ""
		}
		 );

	return (
		<div className={styles.ieocard2}>

		<div>
		<p className={styles.deopdescription}>SP Balances: {WalletAddress ? toEther(ERC20Balances || 0n) : "0"} </p>  
		
	    
	</div>
	</div>
	
	
	
												
	)
};

const Supply: React.FC = () => {
	const {data: claimedSupply} = useReadContract(
	   totalSupply,
	   {
		   contract: getContract({
		   client: client,
		   chain:  defineChain(137),
		   address: "0xD2e586Df315238E01c152eb60f87c8EbCB2D8b70",
	   }),
	  
	   }
		);
return (
	<div className={styles.ieocard2}>
<p className={styles.ieodescription}> {claimedSupply ? toEther(claimedSupply || 0n) : "0"} / 1000000  minted</p> 		

</div>
)
};

export default GaslessHome;
function claimTo(arg0: unknown) {
	throw new Error("Function not implemented.");
}
