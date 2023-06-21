import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/dukaan_logo.png'
import hero from '../assets/hero_image.webp'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <div className={styles['background-img']}></div>
      <nav className={styles['nav-container']}>
        <div className={styles.logo}>
          <Link href='/'>
              <Image src={logo} alt='dukaan' width={160} height={52}/>
          </Link>
        </div>
        <div className={styles.menu}>
          <div className={styles.content}>
            <span>Products</span>
            <span className={styles.arrow}>
             <IoIosArrowDown/>
            </span>
          </div>
          <div className={styles.content}>
            <span>Company</span>
            <span className={styles.arrow}>
             <IoIosArrowDown/>
            </span>
          </div>
          <div className={styles.content}>
            <Link href='/' className={styles['price-link']}>
              <span>Pricing</span>       
            </Link>
          </div>
        </div>
        <div className={styles.action}>
          <div>
            <Link href="/" className={styles['auth-link']}>
              <p>Sign in</p>
            </Link>
          </div>
          <div>
            <Link href="/">
              <button className={styles['trial-btn']}>Start free trial</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header