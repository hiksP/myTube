import { FC } from 'react'
import Image from 'next/image'
import styles from './VideoItem.module.scss'
import { IVideo } from '../../types/video.interface'
import numberFormatting from '../../utils/numberFormatting.utils'
import UserAvatar from '../ui/userAvatar/UserAvatar'

const VideoItem: FC<{ item: IVideo }> = ({ item }) => {
  return (
    <div className={styles.container}>
      <time className={styles.duration}>{item.duration}</time>
      <Image
        className={styles.thumbnail}
        width={165}
        height={90}
        alt={item.name}
        src={item.thumbnailPath}
        priority
      />
      <UserAvatar
        avatar={String(item.user?.avatarPath)}
        name={String(item.user?.name)}
        isVerified={!!item.user?.isVerified}
        id={Number(item.user?.id)}
        isChannel={false}
      ></UserAvatar>
      <h2 className={styles.title}>{item.name}</h2>
      <p className={styles.views}>{numberFormatting(item.views) + ' views'}</p>
    </div>
  )
}

export default VideoItem
