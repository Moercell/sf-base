import Image from 'next/image'
import styles from './page.module.css'
import GameData from './gameData'

export default function Home() {
  return (
    <main className={styles.main}>
      <GameData />
    </main>
  )
}
