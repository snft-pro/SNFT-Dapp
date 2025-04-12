"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { Conbutton } from "../Connect/Connect";
import { Icon } from '@iconify/react';


export default function Navbar() {
  return (

    <>
        <div className={styles.nav}>

    
      <div className={styles.navLeft}>
      <Link href="/" className={`${styles.homeLink} ${styles.footerLeft}`}>
        <Image 
        src="/logo.png"
        width={100}
        height={40}
        alt="SNFT" 
        />  

       </Link>

      <a  className={styles.gradientText} href="/">Home</a>
      <a  className={styles.gradientText} href="https://create.snft.pro/">Launcher</a>
      <a  className={styles.gradientText} href="/profile">Account</a>


      <Dropdown className={styles.button}>
          <DropdownTrigger >
            <Button className={styles.button}
              
            >
            Products <Icon icon="lucide:chevron-down" width="15" height="15" />
            </Button>
          </DropdownTrigger >
          <DropdownMenu >
            <DropdownItem className={styles.dropdown}  href="https://docs.snft.pro/snft-chain" target="_blank">SNFT Chain </DropdownItem>
            <DropdownItem className={styles.dropdown}  href="/pass">Mint PASS</DropdownItem>
            <DropdownItem className={styles.dropdown}  href="/spieo">Mint SP</DropdownItem>
            <DropdownItem className={styles.dropdown}  href="/sstake">S Stake</DropdownItem>
            <DropdownItem className={styles.dropdown}  href="/spstake">SP Stake</DropdownItem>
            <DropdownItem className={styles.dropdown}  href="/passstake">Pass Stake</DropdownItem>
          </DropdownMenu>
        </Dropdown>


        <Dropdown className={styles.button}>
          <DropdownTrigger >
            <Button className={styles.button}
            >
            Services <Icon icon="lucide:chevron-down" width="15" height="15"  />
            </Button>
          </DropdownTrigger >
          <DropdownMenu >
            <DropdownItem className={styles.dropdown}  href="/market">Marketplace</DropdownItem>
            <DropdownItem className={styles.dropdown}  href="/launchpad">Launchpad</DropdownItem>
            <DropdownItem className={styles.dropdown}  href="/nftstakes">NFT Stakes</DropdownItem>
            <DropdownItem className={styles.dropdown}  href="/erc20stakes">Token Stakes</DropdownItem>
            <DropdownItem className={styles.dropdown}  href="/pay">Crypto Pay</DropdownItem>
            <DropdownItem className={styles.dropdown}  href="https://dex.snft.pro">SNFT DEX</DropdownItem>
            
          </DropdownMenu>
        </Dropdown>


        <Dropdown className={styles.button}>
          <DropdownTrigger >
            <Button className={styles.button}
            >
            Activity <Icon icon="lucide:chevron-down" width="15" height="15" />
            </Button>
          </DropdownTrigger >
          <DropdownMenu >
            <DropdownItem className={styles.dropdown}  href="/freenft">Free NFTs</DropdownItem>
            <DropdownItem className={styles.dropdown}  href="/faucets">Faucets</DropdownItem>
            <DropdownItem className={styles.dropdown}  href="/events">Events</DropdownItem>
            <DropdownItem className={styles.dropdown}  href="https://t.me/snftprobot/min" target="_blank">Mini App</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
   
    </div>

    <div className={styles.navMiddle}>
    
      <a className={styles.gradientText} href="https://texplorer.snft.in/" target="_blank">Explorer</a>
      <a  className={styles.gradientText} href="https://thirdweb.com/snft-testnet" target="_blank">Faucet</a>
      <a  className={styles.gradientText} href="https://snfttestchain-qlxpccn5dn-8e841e57da26f615.testnets.rollbridge.app/" target="_blank">Bridge</a>


    </div>
      <div className={styles.navRight}>



        <Conbutton />


      </div>
      
      </div>
      
      </>
     
  );
}
export { Navbar };
