import { FC } from 'react'
import styles from './RecomendationList.module.scss'
import RecomendedVideo from '../RecomendedVideo/RecomendedVideo'
import { IRecomendations } from '../../Recomendations/Recomendations'

const RecomendationList: FC<IRecomendations> = ({ videos }) => {
  const isVideosMoreThanFour = videos.length >= 4

  return (
    <ul
      className={
        isVideosMoreThanFour
          ? `${styles.list} + ' ' + ${styles.between}`
          : styles.list
      }
    >
      {videos.map(video => (
        <RecomendedVideo item={video} key={video.id}></RecomendedVideo>
      ))}
    </ul>
  )
}

export default RecomendationList
