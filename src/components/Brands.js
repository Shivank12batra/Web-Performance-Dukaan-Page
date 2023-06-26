import Image from 'next/image'
import govo from '../assets/brands/govo.svg'
import healthxp from '../assets/brands/healthxp.svg'
import lemonade from '../assets/brands/lemonade.svg'
import style_up from '../assets/brands/style_up.svg'
import uppercase from '../assets/brands/uppercase.svg'
import vu from '../assets/brands/vu.svg'
import wow from '../assets/brands/wow.svg'
import styles from '../styles/Brands.module.css'

const Brands = () => {
  return (
    <div className={styles['brands-container']}>
        <div className={styles['brands']}>
            <Image className={styles.brand} src={govo} alt='govo' width={150} height={50}/>
            <Image className={styles.brand} src={healthxp} alt='healthxp' width={150} height={50}/>
            <Image className={styles.brand} src={lemonade} alt='lemonade' width={150} height={50}/>
            <Image className={styles.brand} src={style_up} alt='style_up' width={150} height={50}/>
            <Image className={styles.brand} src={uppercase} alt='uppercase' width={150} height={50}/>
            <Image className={styles.brand} src={vu} alt='vu' width={150} height={50}/>
            <Image className={styles.brand} src={wow} alt='wow' width={150} height={50}/>
            <Image className={styles.brand} src={govo} alt='govo' width={150} height={50}/>
            <Image className={styles.brand} src={healthxp} alt='healthxp' width={150} height={50}/>
            <Image className={styles.brand} src={lemonade} alt='lemonade' width={150} height={50}/>
            <Image className={styles.brand} src={style_up} alt='style_up' width={150} height={50}/>
            <Image className={styles.brand} src={uppercase} alt='uppercase' width={150} height={50}/>
            <Image className={styles.brand} src={vu} alt='vu' width={150} height={50}/>
            <Image className={styles.brand} src={wow} alt='wow' width={150} height={50}/>
        </div>
    </div>
  )
}

export default Brands
