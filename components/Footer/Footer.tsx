import Link from 'next/link';
import styles from "./Footer.module.css";
import Image from "next/image";
import React from "react";
export default function Footer() {
  return (


      <footer className={styles.footer}>


        <div className={styles.footerLeft}>
        <Link href="/" className={`${styles.homeLink} ${styles.footerLeft}`}>
        <Image 
        src="/snft.png"
        width={50}
        height={50}
        alt="SNFT" 
        />  

       </Link>
       <br/>
       <p className={styles.gradientText}>MultiChain: Marketplace, Launchpad, and Stakes<br/>Contact us: info@snft.pro</p>
        <p className={styles.gradientText}>SNFT © 2025 - all Rights Reserved</p>
        </div>


 
  <div className={styles.footerMiddle}>

  <h3 className={styles.footertitle}>Products</h3>

<Link href="/pass" className={styles.gradientText} >
SNFT PASS
</Link>
<Link href="/passstake" className={styles.gradientText}>
Pass Stake
</Link>
<Link href="/spstake" className={styles.gradientText} >
SP Stake
</Link>
<Link href="/sstake" className={styles.gradientText} >
S Stake
</Link>

<Link href="/events" className={styles.gradientText} rel="noreferrer">
Events
</Link>
<Link href="https://t.me/snftprobot/min" className={styles.gradientText} target="_blank" rel="noreferrer">
Mini App
</Link>
<Link href="/freenft" className={styles.gradientText}  rel="noreferrer">
Free NFTs
</Link>
  </div>


<div className={styles.footerMiddle}>
<h3 className={styles.footertitle}>Services</h3>

<Link href="/market" className={styles.gradientText}>
Marketplace
</Link>
<Link href="/launchpad" className={styles.gradientText} >
Launchpad EVM
</Link>

<Link href="/pay" className={styles.gradientText}>
Crypto Pay
</Link>
<Link href="/nftstakes" className={styles.gradientText} >
NFT Stakes    
</Link>
<Link href="/ieo" className={styles.gradientText} >
Token Sale
</Link>
<Link href="/erc20stakes" className={styles.gradientText} >
Token Stakes
</Link>
<Link href="/faucets" className={styles.gradientText} >
EVM Faucets
</Link>
  </div>

  <div className={styles.footerMiddle}>
<h3 className={styles.footertitle}>Explorers</h3>

<Link href="https://polygonscan.com/token/0x81773cfea4f68216c4f20bdaaaae8f73e7b16df9" className={styles.gradientText} target="_blank" rel="noreferrer">
S Token
</Link>
<Link href="https://polygonscan.com/address/0xD819aE315fDF5b22C63394848d9fEf8C7eA8dcEC" className={styles.gradientText} target="_blank" rel="noreferrer">
S Staking
</Link>
<Link href="https://polygonscan.com/token/0xd2e586df315238e01c152eb60f87c8ebcb2d8b70" className={styles.gradientText} target="_blank" rel="noreferrer">
SP Token
</Link>
<Link href="https://polygonscan.com/address/0x8d972005b8A9d93428Ca2EBbEbdE4e9EC63AD54B" className={styles.gradientText} target="_blank" rel="noreferrer">
SP Staking
</Link>
<Link href="https://polygonscan.com/tokenholdings?a=0xae47516376b90666be60662ac71c750db39efad3" className={styles.gradientText} target="_blank" rel="noreferrer">
S/SP Poll
</Link>
<Link href="https://polygonscan.com/tokenholdings?a=0x7e8929b45ba5767828f24a10bdccbe1e2523f6b6" className={styles.gradientText} target="_blank" rel="noreferrer">
SP/POL Poll 
</Link>
<Link href="https://polygonscan.com/token/0xDeC4f3EC151CeF3154659Bf8F43cC5332c533b93" className={styles.gradientText} target="_blank" rel="noreferrer">
SNFT Pass   
</Link>
<Link href="https://polygonscan.com/address/0x58cd092a3299468699765d46d448578053e6fad2" className={styles.gradientText} target="_blank" rel="noreferrer">
Pass Staking
</Link>

  </div>

<div className={styles.footerMiddle}>

<h3 className={styles.footertitle}>Trade</h3>


<Link href="https://app.uniswap.org/swap?chain=polygon&use=V3&inputCurrency=0x0000000000000000000000000000000000001010&outputCurrency=0xd2e586df315238e01c152eb60f87c8ebcb2d8b70" 
className={styles.gradientText} target="_blank" rel="noreferrer">
SP/POL
</Link>
<Link href="https://app.uniswap.org/swap?chain=polygon&use=V3&inputCurrency=0x81773cFEA4f68216c4F20BDaaAAE8F73e7b16DF9&outputCurrency=0xD2e586Df315238E01c152eb60f87c8EbCB2D8b70" 
className={styles.gradientText} target="_blank" rel="noreferrer">
S/SP
</Link>

<br/>
<h3 className={styles.footertitle}>Documents</h3>

<Link href="https://docs.snft.pro/terms-and-conditions" className={styles.gradientText} target="_blank" rel="noreferrer">
Terms of use
</Link>
<Link href="https://docs.snft.pro/privacy-policy" className={styles.gradientText} target="_blank" rel="noreferrer">
Privacy Policy
</Link>
<Link href="https://docs.snft.pro/audit-reports" className={styles.gradientText} target="_blank" rel="noreferrer">
Audit Reports    
</Link>




</div>

<div className={styles.footerMiddle}>
<div className={styles.footerRight}>

<Link href="https://www.linkedin.com/company/snft/" className={`${styles.homeLink} ${styles.footerRight}`} target="_blank" rel="noreferrer">
            <Image
              src="/icons/in.png"
              width={30}
              height={30}
              alt="" 
            />
          </Link>

          <Link href="https://x.com/snftpro" className={`${styles.homeLink} ${styles.footerRight}`} target="_blank" rel="noreferrer">
            <Image
              src="/icons/tw.png"
              width={30}
              height={30}
              alt="" 
            />
          </Link>

          <Link href="https://github.com/snft-pro" className={`${styles.homeLink} ${styles.footerRight}`} target="_blank" rel="noreferrer">
            <Image
              src="/icons/gi.png"
              width={30}
              height={30}
              alt="" 
            />
          </Link>
          </div>
          <br/>

<h3 className={styles.footertitle}>Help</h3>

<a href="#tally-open=n911bE&tally-width=500">Support Ticket</a>

<a href="#tally-open=nrl7VL&tally-layout=modal&tally-width=1400">Request Service</a>



</div>
        
      </footer>

  );
}
