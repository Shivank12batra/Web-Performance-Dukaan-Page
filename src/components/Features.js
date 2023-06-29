import Image from 'next/image'
import launch_fast from '../assets/features/launch_fast.svg'
import manage_better from '../assets/features/manage_better.svg'
import scale_faster from '../assets/features/scale_faster.svg'
import styles from '../styles/Features.module.css'

const Features = () => {
  return (
    <div className={styles['features-container']}>
        <h2 className={styles['features-header']}>Be it a startup or a legacy business, here&rsquo;s why you need Dukaan</h2>
        <div className={styles['features']}>
          <div className={styles['feature-container']}>
            <div className={styles['feature-img']}>
              <Image src={launch_fast} alt='launch_fast' height={100} width={50}/>
            </div>
            <div className={`${styles.feature} ${styles['star-purple']}`}>
              <h2 className={styles['feature-header']}>Launch Fast</h2>
              <p>Fully responsive e-commerce website & mobile app.</p>
              <p>Loads 6X faster than existing solutions</p>
              <p>Upload/import products and inventory in bulk.</p>
              <p>Integrate payment gateways.</p>
              <p>Easily customizable themes.</p>
            </div>
          </div>
          <div className={styles['feature-container']}>
            <div className={`${styles.feature} ${styles['star-blue']}`}>
              <h2 className={styles['feature-header']}>Scale Faster</h2>
              <p>Your store will have 99.5% uptime.</p>
              <p>60+ third party plugins.</p>
              <p>Marketing tools and discounts to drive repeat orders.</p>
              <p>Add staff accounts, assign different roles.</p>
              <p>Unlimited transactions, 0% transaction fees.</p>
            </div>
            <div className={styles['feature-img']}>
              <Image src={scale_faster} alt='scale_faster' height={100} width={50}/>
            </div>
          </div>
          <div className={styles['feature-container']}>
            <div className={styles['feature-img']}>
              <Image src={manage_better} alt='manage_better' height={100} width={50}/>
            </div>
            <div className={`${styles.feature} ${styles['star-gray']}`}>
              <h2 className={styles['feature-header']}>Manage Better</h2>
              <p>Order tracking, invoicing and order reports.</p>
              <p>Bulk edit product prices, variants, inventory.</p>
              <p>Manage global deliveries.</p>
              <p>In-depth business analytics.</p>
              <p>Automate all tax calculations.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Features