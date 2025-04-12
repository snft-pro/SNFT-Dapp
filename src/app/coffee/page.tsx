import { polygon } from "@/app/chain";
import { client } from "@/app/client";
import { BuyMeCoffee } from "@/../components/BuyMeCoffee/BuyMeCoffee";
import styles from "@/app/styles/Home.module.css";

export default function Home() {
  return (
    <>
    
    <div  className={styles.cafepagebox}>
      <h1 className={styles.tiptitle}>Send Tip</h1>

      <BuyMeCoffee />
      
    </div></>
    
  );
}
