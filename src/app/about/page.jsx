import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
      <Image
      src="https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      fill={true}
      alt="about-us"
      className={styles.img}
      />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
      </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.textTitle}>Who Are we?</h1>
          <p className={styles.textDesc}>Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scr
            ambled it to make a type specimen book. It has survived 
            not only five centuries, but also t</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.textTitle}>Who Are we?</h1>
          <p className={styles.textDesc}>Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scr
            ambled it to make a type specimen book. It has survived 
            not only five centuries, but also t</p>
            <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About