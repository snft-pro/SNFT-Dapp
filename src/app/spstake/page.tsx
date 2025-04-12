import { StakeToken } from "../../../components/ERC20Staking/StakeTokenSP"; 
import styles from "@/app/styles/Home.module.css";
export default function Home() {
  return (
        <div className={styles.container}>
            <StakeToken />
          </div>
  );
}
