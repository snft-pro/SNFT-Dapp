"use client";

import { client } from "@/consts/client";
import { useGetENSAvatar } from "@/hooks/useGetENSAvatar";
import { useGetENSName } from "@/hooks/useGetENSName";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { blo } from "blo";
import { FaRegMoon } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import {
  ConnectButton,
  darkTheme,
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
} from "thirdweb/react";
import type { Wallet } from "thirdweb/wallets";
import { SideMenu } from "./SideMenu";

export function Navbar() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const { colorMode } = useColorMode();
  
  return (
    <Box py="20px" px={{ base: "20px", lg: "50px" }}>
      <Flex direction="row" justifyContent="space-between">
        <Box my="auto"> 
          
          <Link href="https://snft.pro/" className=" homeLink" >
          <Image
            src="/snft.png"
            width={45}
            height={45}
            alt="" 
          />
            <p className="gradientText1">Beta</p>
        </Link>
        
        </Box>
        <Box my="auto"> 
       
        <Link href="/"  className="gradientText2" >
        Collections
          </Link>
         
         
          <Link  href="https://p.snft.pro/mcl" className="gradientText2"  target="_blank">
          Get Listed
          </Link>
       
          <Link href="https://app.snft.pro"  className="gradientText2" >
          Launchpad
          </Link>
         
          <Link  href="https://nfts.snft.pro" className="gradientText2" >
          NFTStakes
          </Link>

          <Link href="https://p.snft.pro/ercstakes" className="gradientText2" target="_blank">
          ERCStakes
          </Link>
  
          <Link href="https://faucet.snft.pro/" className="gradientText2" target="_blank" >
          Faucet     
          </Link>

          <Link href="https://app.snft.pro/pay" className="gradientText2"  >
          PAY
          </Link>
          </Box>


          <Box display={{ lg: "block", base: "none" }}>
          {account && wallet ? (
            <ProfileButton address={account.address} wallet={wallet} />
          ) : (
            <ConnectButton
        client={client}
        theme={darkTheme({
          colors: {
            primaryButtonBg: "#242424",
            primaryButtonText: "#dadde7",
          },
        })}
        
        connectModal={{
          size: "wide",
          titleIcon: "snft.png",
          welcomeScreen: {
            title: "SNFT",
            subtitle: "MultiChain Marketplace",
            img: {
              src: "snft.png",
              width: 150,
              height: 150,
            },
          },
          showThirdwebBranding: false,
        }}
      />
          )}
        </Box>
        <SideMenu />
      </Flex>
    </Box>
  );
}

function ProfileButton({
  address,
  wallet,
}: {
  address: string;
  wallet: Wallet;
}) {
  const { disconnect } = useDisconnect();
  const { data: ensName } = useGetENSName({ address });
  const { data: ensAvatar } = useGetENSAvatar({ ensName });
  const { colorMode } = useColorMode();
  return (
    <Menu>
      <MenuButton as={Button} height="56px">
        <Flex direction="row" gap="5">
          <Box my="auto">
            <FiUser size={30} />
          </Box>
          <Image
            src={ensAvatar ?? blo(address as `0x${string}`)}
            height="40px"
            rounded="8px"
          />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem display="flex">
          <Box mx="auto">
          <ConnectButton
        client={client}
        theme={darkTheme({
          colors: {
            primaryButtonBg: "#242424",
            primaryButtonText: "#dadde7",
          },
        })}
        
        connectModal={{
          size: "wide",
          titleIcon: "snft.png",
          welcomeScreen: {
            title: "SNFT",
            subtitle: "MultiChain Marketplace",
            img: {
              src: "snft.png",
              width: 150,
              height: 150,
            },
          },
          showThirdwebBranding: false,
        }}
      />
          </Box>
        </MenuItem>
        <MenuItem as={Link} href="/profile" _hover={{ textDecoration: "none" }}>
          Profile {ensName ? `(${ensName})` : ""}
        </MenuItem>
        <MenuItem
          onClick={() => {
            if (wallet) disconnect(wallet);
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}


