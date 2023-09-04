import {useState, useEffect} from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { GrMenu } from "react-icons/gr"
import {FaTimes} from "react-icons/fa"
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logos/dukaan_logo.png'
import { productsData } from '@/utils/navData'
import { companyData } from '@/utils/navData'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [navDropDown, setNavDropDown] = useState('')
  const [navColor, setNavColor] = useState(false)
  const COLOR_CHANGE_THRESHOLD = 90

  useEffect(() => {
    console.log('use effect hook fired!')
    const handleScroll = () => {
      console.log('scroll')
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
    <div className={styles['header-container']} onMouseLeave={() => {
      setNavDropDown('')
      setNavColor(false)
      }}>
      <div className={styles['background-img']}></div>
      {navOpen ? 
      (<div className={styles['nav-open']}>
        <div className={styles['nav-open-content']}>
          <p>Products {navDropDown === 'Products'  ? <IoIosArrowUp className={styles.arrow} onClick={() => setNavDropDown('')}/> : <IoIosArrowDown className={styles.arrow} onClick={() => setNavDropDown('Products')}/>}</p>
          <div className={`${navDropDown === 'Products' ? styles['dropdown-open'] : styles['dropdown-close']}`}>
            {productsData.map(product => {
              const {id, image_url, header} = product
              return (
                <div key={id} className={styles['dropdown']}>
                  <Image src={image_url} alt={header} width={20} height={20}/>
                  <span>{header}</span>
                </div>
              )
            })}
          </div>
          <p>Company {navDropDown === 'Company'  ? <IoIosArrowUp className={styles.arrow} onClick={() => setNavDropDown('')}/> : <IoIosArrowDown className={styles.arrow} onClick={() => setNavDropDown('Company')}/>}</p>
          <div className={`${navDropDown === 'Company' ? styles['dropdown-open'] : styles['dropdown-close']}`}>
            {companyData.map(data => {
              const {id, image_url, header} = data
              return (
                <div key={id} className={styles['dropdown']}>
                  <Image src={image_url} alt={header} width={20} height={20}/>
                  <span>{header}</span>
                </div>
              )
            })}
          </div>
          <p>Pricing</p>
        </div>
      </div>) :
       null}
      <nav className={`${navColor ? styles['nav-scroll'] : ''} ${styles['nav-container']}`}>
        <div className={styles.logo}>
          <Link href='/'>
              <Image src={logo} alt='dukaan' width={150} height={52}/>
          </Link>
        </div>
        <div className={styles.menu}>
          <div className={styles.content} onMouseEnter={() => {
            setNavDropDown('Products')
            setNavColor(true)
            }}>
            <span>Products</span>
            <span className={styles.arrow}>
             {navDropDown === 'Products' ? <IoIosArrowUp/> : <IoIosArrowDown/>}
            </span>
          </div>
          <div className={styles.content} onMouseEnter={() => {
            setNavDropDown('Company')
            setNavColor(true)
            }}>
            <span>Company</span>
            <span className={styles.arrow}>
             {navDropDown === 'Company' ? <IoIosArrowUp/> : <IoIosArrowDown/>}
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
      {navDropDown !== '' ?
      <div className={styles['nav-dropdown-container']}>
        {navDropDown === 'Products' ?
        <div className={styles['nav-dropdown']}>
          {productsData.map(product => {
            const {id, image_url, header, description} = product
            return (
              <div key={id} className={styles.dropdown}>
                <Image src={image_url} alt={header} height={30} width={30}/>
                <div className={styles['dropdown-content']}>
                  <p>{header}</p>
                  <span>{description}</span>
                </div>
              </div>
            )
          })}
        </div> : 
        <div className={styles['nav-dropdown']}>
          {companyData.map(data => {
            const {id, image_url, header, description} = data
            return (
              <div key={id} className={styles.dropdown}>
                <Image src={image_url} alt={header} height={30} width={30}/>
                <div className={styles['dropdown-content']}>
                  <p>{header}</p>
                  <span>{description}</span>
                </div>
              </div>
            )
          })}
        </div>}
        </div> :
         null}
    </div>
  )
}

export default Navbar