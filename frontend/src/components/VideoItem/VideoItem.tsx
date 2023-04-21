import { FC } from 'react'
import Image from 'next/image'
import styles from './VideoItem.module.scss'
import { IVideo } from '../../types/video.interface'
import numberFormatting from '../../utils/numberFormatting.utils'

const VideoItem: FC<{ item: IVideo }> = ({ item }) => {
  return (
    <div className={styles.container}>
      <p className={styles.duration}>15</p>
      <Image
        className={styles.thumbnail}
        width={165}
        height={90}
        alt={item.name}
        src={item.thumbnailPath}
        priority
      />
      <Image
        className={styles.avatar}
        src={String(item.user?.avatarPath)}
        alt={String(item.user?.name)}
        width={50}
        height={50}
      />
      <h2 className={styles.title}>{item.name}</h2>
      <p className={styles.vies}>{numberFormatting(item.views) + ' views'}</p>
    </div>
  )
}

export default VideoItem
