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
                    <li>
                        <Link href="/" legacyBehavior>
                            <a>
                                Business Tools
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                            <a>
                                Dukaan Finder
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                            <a>
                                Dukaan For PC
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                            <a>
                                Dukaan delivery
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                            <a>
                                Dukaan plugins
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                            <a>
                                Dukaan themes
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                            <a>
                                Dukaan enterprise
                            </a>
                        </Link>
                    </li>
                </ul>
                <ul className={styles['footer-links']}>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            Awards 22
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            Help center
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            Blog
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            Banned items
                        </a>
                        </Link>
                    </li>
                </ul>
                <ul className={styles['footer-links']}>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            About
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            Privacy
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            Terms
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            Contact
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            FAQs
                        </a>
                        </Link>
                    </li>
                </ul>
                <ul className={styles['footer-links']}>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            Jobs
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            Branding
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            Press inquiry
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            Bug bounty
                        </a>
                        </Link>
                    </li>
                </ul>
                <ul className={styles['footer-links']}>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            Facebook
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            Twitter
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" legacyBehavior>
                        <a>
                            Linkedin
                        </a>
                        </Link>
                    </li>
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