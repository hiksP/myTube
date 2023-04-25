import { FC } from 'react'
import styles from './SmallVideos.module.scss'
import { IVideo } from '../../types/video.interface'
import SmallVideo from './SmallVideo'

const SmallVideos: FC<{ videos: IVideo[] }> = ({ videos }) => {
  return (
    <ul className={styles.list}>
      {videos.map(video => (
        <SmallVideo video={video} key={video.id}></SmallVideo>
      ))}
    </ul>
  )
}

export default SmallVideos
