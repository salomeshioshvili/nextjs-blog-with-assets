import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
    return (
        <div className={styles.container}>
          <span>@all rights reserved</span>
          <div className={styles.socialNetworks}>
            <a href="https://www.facebook.com/">
            <Image src="/1.png" width={20} className={styles.icon} height={20} alt="facebook"/>
            </a>
            <a href="https://www.instagram.com/">
            <Image src="/2.png" width={20} className={styles.icon} height={20} alt="instagram" />
            </a>
            <a href="https://twitter.com/">
            <Image src="/3.png" width={20} className={styles.icon} height={20} alt="x"/>
            </a>
            <a href="https://www.youtube.com/">
            <Image src="/4.png" width={20} className={styles.icon} height={20} alt="youtube"/>
            </a>
          </div>
        </div>
    )
}

export default Footer