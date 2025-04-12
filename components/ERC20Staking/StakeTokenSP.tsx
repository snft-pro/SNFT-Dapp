'use client';

import { TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { approve, balanceOf } from "thirdweb/extensions/erc20";
import { REWARD_ERC20_TOKEN_CONTRACT, STAKE_ERC20_TOKEN_CONTRACT, STAKING_ERC20_CONTRACT } from  "@/../utils/sp-staking";
import { prepareContractCall, toEther, toWei } from "thirdweb";
import { useEffect, useState } from "react";
import styles from "@/app/styles/Home.module.css";


export const StakeToken = () => {
    const account = useActiveAccount();

    const [stakeAmount, setStakeAmount] = useState(0);
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [stakingState, setStakingState] = useState(Math.random() < 0.5 ? "init" : "approved");
    const [isStaking, setIsStaking] = useState(false);
    const [isWithdrawing, setIsWithdrawing] = useState(false);

    const { data: stakingTokenBalance, isLoading: loadingStakeTokenBalance, refetch: refetchStakingTokenBalance } = useReadContract(
        balanceOf,
        {
            contract: STAKE_ERC20_TOKEN_CONTRACT,
            address: account?.address || "",
            queryOptions: {
                enabled: !!account,
            }
        }
    );

    const { data: rewardTokenBalance, isLoading: loadingRewardTokenBalance, refetch: refetchRewardTokenBalance } = useReadContract(
        balanceOf,
        {
            contract: REWARD_ERC20_TOKEN_CONTRACT,
            address: account?.address || "",
            queryOptions: {
                enabled: !!account,
            }
        }
    );

    const { data: stakeInfo, refetch: refetchStakeInfo } = useReadContract({
        contract: STAKING_ERC20_CONTRACT,
        method: "getStakeInfo",
        params: [account?.address as string],
        queryOptions: {
            enabled: !!account,
        }
    });

    function truncate(value: string | number, decimalPlaces: number): number {
        const numericValue: number = Number(value);
        if (isNaN(numericValue)) {
            throw new Error('Invalid input: value must be a convertible to a number.');
        }
        const factor: number = Math.pow(10, decimalPlaces);
        return Math.trunc(numericValue * factor) / factor;
    }

    useEffect(() => {
        setInterval(() => {
            refetchData();
        }, 10000);
    }, []);

    const refetchData = () => {
        refetchStakeInfo();
    };

    return (
        <div className={styles.erc20stakepeage}>
            <p className={styles.erc20staketitle}>SP Staking</p>
            <p className={styles.erc20stakedescription}> Stake SP tokens, earn WPOL. 15% APY</p>
            {account && (
                <div  className={styles.erc20stakedata}>
             
                    
                    {stakeInfo && (
                        <>
                            <div className={styles.dropmintbtn}>
                                <button
                                style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", borderRadius: "15px", color: "#ffffff"}}

                                    onClick={() => setIsStaking(true)}
                                >Stake</button>
                                <button
                                style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", borderRadius: "15px", color: "#ffffff"}}

                                    onClick={() => setIsWithdrawing(true)}
                                >Withraw</button>
                            </div>
                            <div className={styles.erc20stakebtn}>
                                <p className={styles.erc20stakedescription}>SP Staked: {truncate(toEther(stakeInfo[0]).toString(),8)}</p>
                                <p className={styles.erc20stakedescription}>Claimable: {truncate(toEther(stakeInfo[1]).toString(),8)}</p>
                               <div/>
                               
                            </div>
                                <div className={styles.erc20stakebtn}>
                                <TransactionButton
                                    transaction={() => (
                                        prepareContractCall({
                                            contract: STAKING_ERC20_CONTRACT,
                                            method: "claimRewards",
                                        })
                                    )}
                                    onTransactionConfirmed={() => {
                                        refetchData();
                                        refetchStakingTokenBalance();
                                        refetchRewardTokenBalance();
                                    }}
                                    style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}

                                >Claim </TransactionButton>
                            </div>
                        </>
                    )}
                  {isStaking && (
                        <div style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            backgroundColor: "#131418",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <div style={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                backgroundColor: "#18191e",
                                padding: "40px",
                                borderRadius: "10px",
                                minWidth: "500px",
                                minHeight: "350px",
                            }}>
                                <button
                                style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", borderRadius: "15px", color: "#ffffff"}}

                                    onClick={() => {
                                        setIsStaking(false)
                                        setStakeAmount(0);
                                        setStakingState("init");
                                        
                                    }}
                                >Close</button>
                                <br/>
                                <h3 className={styles.deopdescription}>Stake</h3>
                                <p className={styles.deopdescription}>Balance: {toEther(stakingTokenBalance!)}</p>
                                {stakingState === "init" ? (
                                    <>
                                        <input 
                                            type="number" 
                                            placeholder="0.0"
                                            value={stakeAmount}
                                            onChange={(e) => setStakeAmount(parseFloat(e.target.value))}
                                            className={styles.claimInput2}

                                        />
                                        <TransactionButton
                                            transaction={() => (
                                                approve({
                                                    contract: STAKE_ERC20_TOKEN_CONTRACT,
                                                    spender: STAKING_ERC20_CONTRACT.address,
                                                    amount: stakeAmount,
                                                })
                                            )}
                                            onTransactionConfirmed={() => setStakingState("approved")}
                                            style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}

                                        >Set Approval</TransactionButton>
                                    </>
                                   
                                ) : (
                                    <>
                                        <h3 style={{ margin: "10px 0"}}>{stakeAmount}</h3>
                                        <TransactionButton
                                            transaction={() => (
                                                prepareContractCall({
                                                    contract: STAKING_ERC20_CONTRACT,
                                                    method: "stake",
                                                    params: [toWei(stakeAmount.toString())],
                                                })
                                            )}
                                            onTransactionConfirmed={() => {
                                                setStakeAmount(0);
                                                setStakingState("init")
                                                refetchData();
                                                refetchStakingTokenBalance();
                                                setIsStaking(false);
                                            }}
                                            style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}

                                        >Stake</TransactionButton>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                    {isWithdrawing && (
                        <div style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            backgroundColor: "#131418",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <div  style={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                backgroundColor: "#18191e",
                                padding: "40px",
                                borderRadius: "10px",
                                minWidth: "500px",
                                minHeight: "350px",
                            }}>
                                <button
                                style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", borderRadius: "15px", color: "#ffffff"}}

                                    onClick={() => {
                                        setIsWithdrawing(false)
                                    }}
                                >Close</button>
                                 <br/>
                                <h3 className={styles.deopdescription}>Withraw</h3>
                                <input 
                                    type="number" 
                                    placeholder="0.0"
                                    value={withdrawAmount}
                                    onChange={(e) => setWithdrawAmount(parseFloat(e.target.value))}
                                    className={styles.claimInput2}

                                />
                                <TransactionButton
                                    transaction={() => (
                                        prepareContractCall({
                                            contract: STAKING_ERC20_CONTRACT,
                                            method: "withdraw",
                                            params: [toWei(withdrawAmount.toString())],
                                        })
                                    )}
                                    onTransactionConfirmed={() => {
                                        setWithdrawAmount(0);
                                        refetchData();
                                        refetchStakingTokenBalance();
                                        setIsWithdrawing(false);
                                    }}
                                    style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}

                                >Withdraw</TransactionButton>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
};
