"use client";
import { ThirdwebProvider, PayEmbed, darkTheme } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Home.module.css";
import { polygon } from "thirdweb/chains";


const client = createThirdwebClient({ clientId: "6c05b633fa70489f38762b5ff2c672fc" });



const Pay: NextPage = () => {
    return (

        <div className={styles.container}>
          <div className={styles.paypage}>
            <div className={styles.payBox}>
     
            <ThirdwebProvider>
             <PayEmbed
             client={client}
             payOptions={{
               mode: "fund_wallet",
               metadata: {
                 name: "Top Up",
               },
               prefillBuy: {
                 chain: polygon,
                 amount: "1",
               },
             }}
             theme={darkTheme({
              colors: {
                modalBg: "hsla(216, 71.10%, 14.90%, 0.80)",
                accentText: "hsla(213, 3.90%, 45.70%, 0.80)",
                separatorLine: "hsl(229, 71%, 20%)",
                borderColor: "hsla(219, 71.10%, 14.90%, 0.42)",
                accentButtonBg: "hsl(216, 70%, 15%)",
                accentButtonText: "hsl(240, 6%, 94%)",
                primaryButtonBg: "hsla(216, 71.10%, 14.90%, 0.80)",
                primaryButtonText: "hsl(229, 26%, 71%)",
                tertiaryBg: "hsl(216, 70%, 15%)",
                secondaryButtonBg: "hsla(216, 71.10%, 14.90%, 0.80)",
                secondaryButtonHoverBg: "hsla(216, 71.10%, 14.90%, 0.80)",
                danger: "hsl(347, 88.50%, 59.00%)",
              },
            })}
           />
              </ThirdwebProvider>
            </div>
            
          </div>
       
        </div>



      
    );

  };
  
  export default Pay;
