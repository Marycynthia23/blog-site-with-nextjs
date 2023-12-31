import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in touch</h1>
      <div className={styles.content}>
         <div className={styles.imgContainer}>
          <Image
          src="/illustration.png"
          alt=""
          fill={true}
          className={styles.image}/>
         </div>
         <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea className={styles.textArea} col="30" row="10" placeholder="message"></textarea>
          <Button url="#" text="Send"/>
         </form>
      </div>
    </div>
  )
}

export default Contact