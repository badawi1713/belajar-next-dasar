import { Layout } from "../components"
import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Home() {
  return (

    <Layout pageTitle="Home">
      <main className={styles.['main-container']}>
        <div className={styles.hero}>
        <Image className={styles.image} width={200} height={200} src="/images/pokeball.png" alt="img-desc" />
          <h1 className={styles.['title-homepage']}>Welcome Dzaky</h1>
          <p>{new Date().getFullYear()}</p>
        </div>
      </main>
    </Layout>
  )
}