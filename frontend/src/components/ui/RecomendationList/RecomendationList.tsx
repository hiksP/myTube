import { FC } from 'react'
import styles from './RecomendationList.module.scss'
import { IVideo } from '../../../types/video.interface'
import RecomendedVideo from '../RecomendedVideo/RecomendedVideo'

const RecomendationList: FC<{ videos: IVideo[] }> = ({ videos }) => {
  return (
    <ul className={styles.list}>
      {videos.map(video => (
        <RecomendedVideo item={video} key={video.id}></RecomendedVideo>
      ))}
    </ul>
  )
}

export default RecomendationList
