import { FC } from 'react'
import styles from './VideoItem.module.scss'
import { IVideo } from '../../types/video.interface'

const VideoItem: FC<{ item: IVideo }> = ({ item }) => {
  return (
    <div>
      <p>{item.name}</p>
    </div>
  )
}

export default VideoItem
