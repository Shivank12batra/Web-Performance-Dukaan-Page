import {useState, useEffect} from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { GrMenu } from "react-icons/gr"
import {FaTimes} from "react-icons/fa"
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logos/dukaan_logo.png'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [navColor, setNavColor] = useState(false)
  const COLOR_CHANGE_THRESHOLD = 90;

  useEffect(() => {
    console.log('use effect hook fired!')
    const handleScroll = () => {
      console.log('scrolleddd')
      if (window.scrollY >= COLOR_CHANGE_THRESHOLD && !navColor) {
        setNavColor(true);
      }
      if (window.scrollY < COLOR_CHANGE_THRESHOLD && navColor) {
        setNavColor(false);
      }
    };

      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navColor])


  
  return (
    <div className={styles['header-container']}>
      <div className={styles['background-img']}></div>
      <nav className={`${navColor ? styles['nav-scroll'] : ''} ${styles['nav-container']}`}>
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
        <div className={styles['mobile-icon']} onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes size={25}/> : <GrMenu size={25}/>}
        </div>
      </nav>
    </div>
  )
}

export default Navbar