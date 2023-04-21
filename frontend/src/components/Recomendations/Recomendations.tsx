import { FC } from 'react'
import styles from './Recomendations.module.scss'
import RecomendedVideo from '../ui/RecomendedVideo/RecomendedVideo'

const Recomendations: FC = () => {
  return (
    <section className={styles.recomendations}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Рекомендации</h2>
        <div className={styles.line}>
          <div className={styles.box}>
            {/* {data?.length ? (
              data.map(video => (
                <RecomendedVideo video={video} key={video.id}></RecomendedVideo>
              ))
            ) : (
              <div>
                <p>Нет видео</p>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recomendations
