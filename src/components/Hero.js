import React from 'react'
import Image from 'next/image'
import hero from '../assets/banners/hero_image.webp'
import apple from '../assets/icons/apple_icon.svg'
import google from '../assets/icons/playstore_icon.svg'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <div className={styles['hero-container']}>
        <div className={styles['hero-left']}>
          <h1 className={styles['hero-header']}>
            Your Global Commerce Partner, Engineered for Peak Performance
          </h1>
          <p className={styles['hero-content']}>
            Effortlessly launch a stunning online store, attract and convert more customers.
          </p>
          <button className={styles['hero-btn']}>
            Start 7-day free trial
          </button> 
          <div className={styles['hero-icons']}>
            <p className=''>Also available on</p>
            <a href='https://apps.apple.com/in/app/dukaan-create-online-dukan/id1560859298' target='_blank' rel='noopener noreferrer'>
              <Image className={styles['icon-img']} src={apple} alt='apple_icon' width={20} height={20}/>
            </a>
            <a href='https://play.google.com/store/apps/details?id=com.dukaan.app' target='_blank' rel='noopener noreferrer'>
              <Image className={styles['icon-img']} src={google} alt='google_playstore' width={20} height={20}/>
            </a>
          </div>
        </div>
        <div className={styles['hero-right']}>
          <Image className={styles['hero-image']} src={hero} alt='hero_img' width={500} height={500}/>
        </div>
    </div>
  )
}

export default Hero