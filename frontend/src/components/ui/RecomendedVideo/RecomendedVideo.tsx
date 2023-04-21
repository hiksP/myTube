import { FC } from 'react'
import styles from './RecomendedVideo.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/legacy/image'
import VideoStatistic from './VideoStatistic'
import { IVideoItem } from '../../../types/videoItem.interface'

const RecomendedVideo: FC<IVideoItem> = ({
  item,
  isUpdateLink,
  removeHandler
}) => {
  const { push } = useRouter()

  return (
    <li className={styles.item}>
      {!!removeHandler && (
        <button
          onClick={() => removeHandler(item.id)}
          className={styles.remove}
        ></button>
      )}
      {isUpdateLink && (
        <button
          className={styles.update}
          onClick={() => push(`/video/edit/${item.id}`)}
        ></button>
      )}
      <time className={styles.duration}>{item.duration}</time>
      <div className={styles.thumbnail}>
        <Image
          src={item.thumbnailPath}
          width={185}
          height={103}
          layout='responsive'
          alt={item.name}
        ></Image>
      </div>
      <div className={styles.content}>
        <Image
          src={String(item.user?.avatarPath)}
          className={styles.avatar}
          width={50}
          height={50}
          alt={String(item.user?.name)}
        ></Image>
        <p className={styles.author}>{String(item.user?.name)}</p>
        <h3 className={styles.videoTitle}>Nazvanie</h3>
        <VideoStatistic
          views={item.views}
          createdAt={item.createdAt}
        ></VideoStatistic>
      </div>
    </li>
  )
}

export default RecomendedVideo
