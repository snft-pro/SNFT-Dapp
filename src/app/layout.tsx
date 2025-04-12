
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@/app/thirdweb";
import Navbar from "@/../components/Navbar/Navbar";
import Footer from "@/../components/Footer/Footer";
import styles from "@/app/styles/Home.module.css";
import {
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SNFT",
  description: "NFT Marketplace",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <script async src="https://tally.so/widgets/embed.js"></script>
      <ThirdwebProvider>
        <Navbar />
          {children}
          <div className={styles.container2}>

        <Link href={"https://min.snft.pro"} title="Mobile View" >   
        <Text className={styles.homebutton}> Mobile View </Text> </Link>
        
        <Link href={"https://create.snft.pro/"} title="SNFT Launcher" >
        <Text  className={styles.homebutton}> Launcher </Text> </Link> 
         </div>
          <Footer />
      </ThirdwebProvider>
      </body>
    </html>
  );
}
