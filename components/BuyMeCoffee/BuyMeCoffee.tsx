'use client';

import { useState } from "react";
import { prepareContractCall, toWei } from "thirdweb";
import { TransactionButton, useActiveAccount, useContractEvents, useReadContract } from "thirdweb/react";
import { contract } from "@/../utils/cafecontract";
import styles from "@/app/styles/Home.module.css";


export const BuyMeCoffee = () => {
    const account = useActiveAccount();
    const [buyAmount, setBuyAmount] = useState(1);
    const [message, setMessage] = useState("");
    
    const { 
        data: totalCoffees, 
        refetch: refetchTotalCoffees 
    } = useReadContract({
        contract: contract,
        method: "getTotalCoffee",
    });
    const { 
        data: contractEvents, 
        refetch: refetchContractEvents 
    } = useContractEvents({ 
        contract: contract,
    });
    
    const truncateWalletAddress = (address: string | undefined) => {
    if (typeof address === 'undefined' || address === null) {
        return '';
    }
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
    const convertDate = (timestamp: bigint) => {
        const timestampNumber = Number(timestamp);
        return new Date(timestampNumber * 1000).toLocaleString();
    };
    
    if (account) {
        return (
            <div className={styles.cafepage}>
               
                <div className={styles.cafepagesmall}>
                <br/>
                    <label className={styles.tipdescription}>Tip amount</label>
                    <br/>
                   
                    <input 
                        type="number" 
                        value={buyAmount}
                        onChange={(e) => setBuyAmount(Number(e.target.value))}
                        step={1}
                        className={styles.cafInput}
                    />
                   <p className={styles.tipdescription}>MATIC</p>
                </div>

                <div className={styles.cafepagesmall}>
                 <br/>
                    <label className={styles.tipdescription}>Message</label>
                    <br/>

                    <input 
                        type="text" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="write a message..."
                        className={styles.cafInput2}
                    />
                    {message && buyAmount > 0 && (
                        <TransactionButton
                        
                            transaction={() => (
                                prepareContractCall({
                                    contract: contract,
                                    method: "buyMeACoffee",
                                    params: [message],
                                    value: BigInt(toWei(buyAmount.toString())),
                                    
                                })
                                
                            )}
                            onTransactionConfirmed={() => {
                                alert("Thank you for the Tip!")
                                setBuyAmount(0);
                                setMessage("");
                                refetchTotalCoffees();
                                refetchContractEvents();
                            }}
                            style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}
                        >Send</TransactionButton>
                    )}
                </div>
                <div  className={styles.Tipraw2}>
                    <br/>
                    <h3 className={styles.tipdescription}>Total Tips: {totalCoffees?.toString()}</h3>
                    </div>
                    <div  >
                    <p className={styles.tipdescription}>Recent Tips:</p>
                   
                    {contractEvents && contractEvents.length > 0 && (
                        [...contractEvents].reverse().map((event, index) => (
                            <div key={index}
                               
                            >
                                
                                 <div  className={styles.Tipraw}>
                                    <p className={styles.tipdata}>
                                        {/* @ts-ignore */}
                                        {truncateWalletAddress(event.args.sender)}
                                    </p>
                                  
                                    <p className={styles.tipdata}>
                                        {/* @ts-ignore */}
                                        {convertDate(event.args.timestamp)}
                                    </p>
                                
                                <p className={styles.tipdata}>
                                    {/* @ts-ignore */}
                                    {event.args.message}
                                </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        )
    }
};
