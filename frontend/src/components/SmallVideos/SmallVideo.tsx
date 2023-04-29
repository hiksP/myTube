import { FC } from 'react'
import styles from './SmallVideos.module.scss'
import { IVideo } from '../../types/video.interface'
import Image from 'next/image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useRouter } from 'next/router'
import numberFormatting from '../../utils/numberFormatting.utils'
import Link from 'next/link'

dayjs.extend(relativeTime)

const SmallVideo: FC<{ video: IVideo }> = ({ video }) => {
  const router = useRouter()

  return (
    <div className={styles.videoContainer}>
      <Link className={styles.image} href={`/video/${video.id}`}>
        <Image
          className={styles.thumbnail}
          src={video.thumbnailPath}
          width={200}
          height={120}
          alt={video.name}
        />
      </Link>
      <div className={styles.infoContainer}>
        <h3 className={styles.title}>{video.name}</h3>
        <p className={styles.views}>
          {numberFormatting(video.views) + ' views'}
        </p>
        <p className={styles.views}>
          {dayjs(new Date(video.createdAt)).fromNow()}
        </p>
        <p
          className={styles.author}
          onClick={() => router.push(`/channel/${video.user?.id}`)}
        >
          {video.user?.name}
        </p>
      </div>
    </div>
  )
}

export default SmallVideo
