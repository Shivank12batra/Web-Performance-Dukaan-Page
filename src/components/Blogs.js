import Image from "next/image"
import dukaan_dimensions from '../assets/blogs/dukaan_dimensions.jpg'
import sell_antiques from '../assets/blogs/sell_antiques.jpg'
import sell_cookies from '../assets/blogs/sell_cookies.jpg'
import styles from '../styles/Blogs.module.css'

const Blogs = () => {
  return (
    <div className={styles['blogs-container']}>
        <h2 className={styles['blogs-header']}>
            Grow your online store. Learn the tips and tricks from experts.
        </h2>
        <ul className={styles.blogs}>
            <li className={styles.blog}>
                <Image src={dukaan_dimensions} alt="dukaan_dimensions"/>
                <h3>PRESS</h3>
                <h4>Dukaan Dimensions 2022 - A Retrospective on the Growth Enabled by Dukaan</h4>
            </li>
            <li className={styles.blog}>
                <Image src={sell_antiques} alt="sell_antiques"/>
                <h3>SELL ONLINE</h3>
                <h4>How to Sell Antiques Online the Right Way - Detailed 8 Step Guide</h4>
            </li>
            <li className={styles.blog}>
                <Image src={sell_cookies} alt="sell_cookies"/>
                <h3>SELL ONLINE</h3>
                <h4>How to Sell Cookies Online Successfully - 7 Step Guide for Beginners</h4>
            </li>
        </ul>
        <button className={styles['blogs-btn']}>View all</button>
    </div>
  )
}

export default Blogs