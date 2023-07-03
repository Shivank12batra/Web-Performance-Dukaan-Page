import Image from 'next/image'
import enigma from '../assets/themes/enigma.png'
import mana from '../assets/themes/mana.webp'
import nirvana from '../assets/themes/nirvana.webp'
import oxford from '../assets/themes/oxford.webp'
import tinker from '../assets/themes/tinker.webp'
import ursa from '../assets/themes/ursa.png'
import styles from '../styles/Themes.module.css'

const Themes = () => {
  return (
    <div className={styles['themes-container']}>
        <h1 className={styles['themes-header']}>
            Kickstart your online store with these themes
        </h1>
        <ul className={styles.themes}>
            <li className={styles.theme}>
                <Image src={tinker} alt='enigma' height={300} width={500}/>
                <h3>Tinker</h3>
            </li>
            <li className={styles.theme}>
                <Image src={ursa} alt='enigma' height={300} width={500}/>
                <h3>Ursa</h3>
            </li>
            <li className={styles.theme}>
                <Image src={enigma} alt='enigma' height={300} width={500}/>
                <h3>Enigma</h3>
            </li>
            <li className={styles.theme}>
                <Image src={mana} alt='enigma' height={300} width={500}/>
                <h3>Mana</h3>
            </li>
            <li className={styles.theme}>
                <Image src={nirvana} alt='enigma' height={300} width={500}/>
                <h3>Nirvana</h3>
            </li>
            <li className={styles.theme}>
                <Image src={oxford} alt='enigma' height={300} width={500}/>
                <h3>Oxford</h3>
            </li>
        </ul>
        <button className={styles['themes-btn']}>View all</button>
    </div>
  )
}

export default Themes