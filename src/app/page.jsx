import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/illustration.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital product</h1>
        <p className={styles.desc}>Turning your ideas into reality.We bring together teams for tech.</p>
        <Button url="/portfolio" text="See our works"/>
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt="heropics" className={styles.img} />
      </div>
      
    </div>
  )
}
