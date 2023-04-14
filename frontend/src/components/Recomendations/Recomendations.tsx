import { FC } from 'react'
import styles from './Recomendations.module.scss'
import RecomendationList from '../ui/RecomendationList/RecomendationList'

const Recomendations: FC = () => {
  return (
    <section className={styles.recomendations}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Рекомендации</h2>
        <div className={styles.line}>
          <div className={styles.box}></div>
        </div>
      </div>
    </section>
  )
}

export default Recomendations
