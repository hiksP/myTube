import { FC } from 'react'
import styles from './SmallVideos.module.scss'
import { IVideo } from '../../types/video.interface'
import Image from 'next/image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useRouter } from 'next/router'

dayjs.extend(relativeTime)

const SmallVideo: FC<{ video: IVideo }> = ({ video }) => {
  const { push } = useRouter()

  return (
    <div className={styles.videoContainer}>
      <span className={styles.image} onClick={() => push(`/video/${video.id}`)}>
        <Image
          className={styles.thumbnail}
          src={video.thumbnailPath}
          width={200}
          height={120}
          alt={video.name}
        />
      </span>
      <div className={styles.infoContainer}>
        <h3 className={styles.title}>{video.name}</h3>
        <p className={styles.views}>{video.views + ' views'}</p>
        <p className={styles.views}>
          {dayjs(new Date(video.createdAt)).fromNow()}
        </p>
        <p
          className={styles.author}
          onClick={() => push(`/channel/${video.user?.id}`)}
        >
          {video.user?.name}
        </p>
      </div>
    </div>
  )
}

export default SmallVideo
