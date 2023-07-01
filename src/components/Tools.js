import Speed from "@/animations/Speed";
import Store from "@/animations/Store";
import Checkout from "@/animations/Checkout";
import Accounts from "@/animations/Accounts";
import Phone from "@/animations/Phone";
import Analytics from "@/animations/Analytics";
import styles from '../styles/Tools.module.css';

const Tools = () => { 

  return (
    <div className={styles['tools-container']}>
        <div className={styles['tools-header']}>
          <h1>E-commerce Simplified, Success Amplified</h1>
          <p>Empowering your online business growth with all the essential tools.</p>
        </div>
        <ul className={styles.tools}>
          <li className={styles.tool}>
            <Speed/>
            <h3>Site Speed</h3>
            <p>Incredibly fast storefronts. don&rsquo;t take our word for it, start selling online and see it for yourself!
            </p>
          </li>
          <li className={styles.tool}>
            <Store/>
            <h3>Multi-Warehouse</h3>
            <p>
              One store, multiple locations. Ship products from multiple warehouses across India.
            </p>
          </li>
          <li className={styles.tool}>
            <Checkout/>
            <h3>Optimised Checkouts</h3>
            <p>
              Offer a seamless shopping experience optimised for checkouts and reduce abandonment rates.
            </p>
          </li>
          <li className={styles.tool}>
            <Accounts/>
            <h3>Staff Accounts</h3>
            <p>Add employees, colleagues and teammates to help you grow your business while managing access.
            </p>
          </li>
          <li className={styles.tool}>
            <Phone/>
            <h3>Android App</h3>
            <p>The world is mobile. It&rsquo;s time your store is too. Get more loyal customers with your mobile app.
            </p>
          </li>
          <li className={styles.tool}>
            <Analytics/>
            <h3>Advanced Analytics</h3>
            <p>All the information about your sales, traffic, regions and products, just a single click away.
            </p>
          </li>
        </ul>
    </div>
  )
}

export default Tools







