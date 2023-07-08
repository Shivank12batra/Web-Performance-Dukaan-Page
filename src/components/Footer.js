import Image from "next/image"
import Link from "next/link"
import grey_dukaan_logo from '../assets/logos/grey_dukaan_logo.svg'
import india_flag from '../assets/logos/india_flag.svg'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles['footer-container']}>
        <section className={styles['section-container']}>
            <div className={styles['footer-logo']}>
                <Image src={grey_dukaan_logo} alt="grey_dukaan_logo" width={160} height={75}/>
            </div>
            <div className={styles['footer-links-container']}>
                <ul className={styles['footer-links']}>
                    <li>Business tools</li>
                    <li>Dukaan finder</li>
                    <li>Dukaan for PC</li>
                    <li>Dukaan delivery</li>
                    <li>Dukaan plugins</li>
                    <li>Dukaan themes</li>
                    <li>Dukaan enterprise</li>
                </ul>
                <ul className={styles['footer-links']}>
                    <li>Awards 22</li>
                    <li>Help center</li>
                    <li>Blog</li>
                    <li>Banned items</li>
                </ul>
                <ul className={styles['footer-links']}>
                    <li>About</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Contact</li>
                    <li>FAQs</li>
                </ul>
                <ul className={styles['footer-links']}>
                    <li>Jobs</li>
                    <li>Branding</li>
                    <li>Branding</li>
                    <li>Press inquiry</li>
                    <li>Bug bounty</li>
                </ul>
                <ul className={styles['footer-links']}>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                </ul>
            </div>
        </section>
        <div className={styles['company-rights-section']}>
            <p>Growthpond Technology Pvt Ltd. All rights reserved, 2023.</p>
            <div className={styles['flag-section']}>
                <span>Made in</span>
                <Image className={styles.flag} src={india_flag} alt="india_flag" width={30} height={15}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer