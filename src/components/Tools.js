import Analytics from "@/animations/Analytics";
import Checkout from "@/animations/Checkout";
import Phone from "@/animations/Phone";
import styles from '../styles/Tools.module.css';

const Tools = () => { 

  return (
    <div className={styles['tools-container']}>
        <Analytics/>
        <Checkout/> 
        <Phone/>
    </div>
  )
}

export default Tools







