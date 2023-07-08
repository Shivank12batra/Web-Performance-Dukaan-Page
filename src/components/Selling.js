import Image from "next/image"
import dark_dukaan_logo from '../assets/logos/dark_dukaan_logo.svg'
import styles from '../styles/Selling.module.css'

const Selling = () => {
  return (
    <div className={styles['section-container']}>
        <div className={styles['selling-section']}>
            <div className={styles.content}>
                <Image src={dark_dukaan_logo} alt="dark_dukaan_logo"/>
                <h1>Start selling online.</h1>
                <p>
                    Take your business online with Dukaan. Get your free online store in 30 seconds.
                </p>
                <button className={styles['trial-btn']}>Start 7-day free trial</button>
            </div>
        </div>
    </div>
  )
}

export default Selling