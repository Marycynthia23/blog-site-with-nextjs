// "use client"
import React from 'react'
import styles from './Footer.module.css'
import Image from "next/image"

const Footer = () => {
    // console.log("hello")

  return (
    <div className={styles.container}>
        <div>&copy;2023 Logoia. All Rights Reserved</div>
        <div className={styles.social}>
            <Image src="/1.png" width={15} height={15} alt="facebook"/>
            <Image src="/2.png" width={15} height={15} alt="twitter"/>
            <Image src="/3.png" width={15} height={15} alt="instagram"/>
            <Image src="/4.png" width={15} height={15} alt="telegram"/>

        </div>
    </div>
  )
}

export default Footer