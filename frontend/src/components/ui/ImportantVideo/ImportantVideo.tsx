import { FC } from 'react'
import styles from './ImportantVideo.module.scss'
import Image from 'next/image'
import { IVideo } from '../../../types/video.interface'
import numberFormatting from '../../../utils/numberFormatting.utils'
import VideoStatistic from '../RecomendedVideo/VideoStatistic'

export interface IImportantVideo {
  video: IVideo
  isTrendy: boolean
}

const ImportantVideo: FC<IImportantVideo> = ({ video, isTrendy }) => {
  return (
    <div className={styles.mostPopular}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.thumbnail}
          src={String(video.thumbnailPath)}
          width={700}
          height={300}
          alt='video'
        ></Image>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{video.name}</h3>
        <Image
          className={styles.avatar}
          src={String(video.user?.avatarPath)}
          width={50}
          height={50}
          alt='avatar'
        ></Image>
        <p className={styles.name}>{video.user?.name}</p>
        <div className={styles.infoContainer}>
          <VideoStatistic
            views={video.views}
            createdAt={video.createdAt}
            isWhite={true}
          ></VideoStatistic>
          <div className={styles.durationContainer}>
            <p className={styles.time}>{video.duration}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImportantVideo
