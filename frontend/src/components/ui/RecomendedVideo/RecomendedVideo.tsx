import { FC } from 'react'
import styles from './RecomendedVideo.module.scss'
import { IVideo } from '../../../types/video.interface'
import Image from 'next/image'

const RecomendedVideo: FC<{ video: IVideo }> = ({ video }) => {
  return (
    <li className={styles.item}>
      <div className={styles.duration}>{video.duration}</div>
      <Image
        src={video.thumbnailPath}
        className={styles.thumbnal}
        width={240}
        height={150}
        alt={video.name}
      ></Image>
      <div className={styles.content}>
        <Image
          src={String(video.user?.avatarPath)}
          className={styles.avatar}
          width={50}
          height={50}
          alt={String(video.user?.name)}
        ></Image>
        <p className={styles.author}>{String(video.user?.name)}</p>
        <h3 className={styles.videoTitle}>{video.name}</h3>
        <div className={styles.infoContainer}>
          <p className={styles.info}>{video.views}</p>
          <p className={styles.info}>{video.createdAt}</p>
        </div>
      </div>
    </li>
  )
}

export default RecomendedVideo
