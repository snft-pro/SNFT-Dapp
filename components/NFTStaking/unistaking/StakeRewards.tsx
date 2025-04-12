import { TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { REWARD_TOKEN_CONTRACT, STAKING_CONTRACT } from  "@/../utils/unistakes";
import { prepareContractCall, toEther } from "thirdweb";
import { useEffect } from "react";
import { balanceOf } from "thirdweb/extensions/erc721";
import styles from "@/app/styles/Home.module.css";
import { Box, Flex } from "@chakra-ui/react";

export const StakeRewards = () => {
    const account = useActiveAccount();

    const {
        data: tokenBalance,
        isLoading: isTokenBalanceLoading,
        refetch: refetchTokenBalance,
    } = useReadContract(
        balanceOf,
        {
            contract: REWARD_TOKEN_CONTRACT,
            owner: account?.address || "",
        }
    )
    
    const {
        data: stakedInfo,
        refetch: refetchStakedInfo,
    } = useReadContract({
        contract: STAKING_CONTRACT,
        method: "getStakeInfo",
        params: [account?.address || ""],
    });

    useEffect(() => {
        refetchStakedInfo();
        const interval = setInterval(() => {
            refetchStakedInfo();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box >
            <Flex direction="column" gap="20" justifyItems="center" alignItems="center" >
            
            {!isTokenBalanceLoading && tokenBalance && (
                <p className={styles.deopdescription}>ERC20 Balance: {toEther(BigInt(tokenBalance.toString()))} </p>
            )}
            
            <h2 className={styles.deopdescription}>Claimable: {stakedInfo && toEther(BigInt(stakedInfo[1].toString()))}</h2>
            

            <TransactionButton
                transaction={() => (
                    prepareContractCall({
                        contract:STAKING_CONTRACT,
                        method: "claimRewards",
                    })
                )}
                onTransactionConfirmed={() => {
                    alert("Rewards claimed!")
                    refetchStakedInfo();
                    refetchTokenBalance();
                }}
                style={{width: "300px", height: "50px", backgroundColor:"#18191e", border: "1px solid #9693972a", color: "#ffffff"}}
            >Claim Rewards</TransactionButton>
                        
                        </Flex>

        </Box>
    )
};
