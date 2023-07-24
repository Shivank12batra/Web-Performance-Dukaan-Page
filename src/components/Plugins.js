import Image from 'next/image'
import styles from '../styles/Plugins.module.css'
import { pluginsData } from '@/utils/pluginsData'
import { useState } from 'react'

const Plugins = () => {
  const [showText, setShowText] = useState(false)

  const imageHoverHandler = () => {

  }

  return (
    <div className={styles['plugins-container']}>
      <div className={styles['plugins-header']}>
        <h1>Enhance your site&apos;s functionality with plugins</h1>
        <p>Choose from over 40+ plugins. Be it tracking analytics, managing shipments to building email lists. There&apos;s a plugin for everything.</p>
      </div>
      <ul className={styles.plugins}>
        {pluginsData.map(plugin => {
          const {id, img_src, img_text} = plugin
          return (
            <li  key={id} className={styles.plugin} onMouseEnter={() => setShowText(img_text)}
            onMouseLeave={() => setShowText('')}>
              <div className={`${showText === img_text ? styles['plugin-text'] : styles['hide-text']}`}>
                {img_text}
              </div>
              <Image src={img_src} alt={img_text} width={75} height={75}/>
            </li>
          )
        })}
      </ul>
      <button className={styles['plugins-btn']}>Take a look</button>
    </div>
  )
}

export default Plugins