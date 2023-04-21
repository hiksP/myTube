import { FC } from 'react'
import styles from './Recomendations.module.scss'
import RecomendedVideo from '../ui/RecomendedVideo/RecomendedVideo'
import RecomendationList from '../ui/RecomendationList/RecomendationList'
import { IVideo } from '../../types/video.interface'

const Recomendations: FC<{ videos: IVideo[] }> = ({ videos }) => {
  return (
    <section className={styles.recomendations}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Рекомендации</h2>
        <div className={styles.line}>
          <div className={styles.box}></div>
        </div>
      </div>
      <RecomendationList videos={videos}></RecomendationList>
    </section>
  )
}

export default Recomendations
