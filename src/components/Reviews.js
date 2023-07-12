import Image from "next/image"
import { reviewsData } from "@/utils/reviewsData"
import quotation_sign from '../assets/logos/quotation_sign.svg'
import styles from '../styles/Reviews.module.css'

const Reviews = () => {
  return (
    <div className={styles['reviews-section-container']}>
        <Image src={quotation_sign} alt="quotation_sign"/>
        <h2 className={styles['reviews-header']}>Hear from our satisfied customers</h2>
        <p className={styles['reviews-info']}>
            From beginners to enterprise brands, everyone loves Dukaan!
        </p>
        <div className={styles['reviews-carousel']}>
            {reviewsData.map(review => {
                const {id, brandImg, title, description, ownerImg, owner, position} = review
                return (
                    <li key={id} className={styles.review}>
                        <Image className={styles['brand-img']} src={brandImg} alt="brand_img" width={100} height={100}/>
                        <h3 className={styles['review-header']}>{title}</h3>
                        <div className={styles['review-info-container']}>
                            <p className={styles['review-info']}>{description}</p>
                        </div>
                        <div className={styles['owner-details']}>
                            <Image className={styles['owner-img']} src={ownerImg} alt="owner_img" width={60} height={60}/>
                            <span className={styles.name}>{owner}</span>
                            <span className={styles.position}>{position}</span>
                        </div>
                    </li>
                )
            })}
        </div>
    </div>
  )
}

export default Reviews