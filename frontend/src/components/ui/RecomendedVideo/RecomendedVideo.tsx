import { FC } from 'react'
import styles from './RecomendedVideo.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/legacy/image'
import VideoStatistic from './VideoStatistic'
import { IVideoItem } from '../../../types/videoItem.interface'
import UserAvatar from '../userAvatar/UserAvatar'

const RecomendedVideo: FC<IVideoItem> = ({
  item,
  isUpdateLink,
  removeHandler
}) => {
  const { push, pathname } = useRouter()

  const isChannelPage = pathname === `/channel/[id]`

  return (
    <li className={styles.item}>
      <time className={styles.duration}>{item.duration}</time>
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
      <span>
        <Image
          src={item.thumbnailPath}
          className={styles.thumbnail}
          width={185}
          height={103}
          layout='responsive'
          alt={item.name}
        ></Image>
      </span>
      {isChannelPage ? null : (
        <UserAvatar
          avatar={String(item.user?.avatarPath)}
          name={String(item.user?.name)}
          isVerified={!!item.user?.isVerified}
          id={Number(item.user?.id)}
          isChannel={isChannelPage}
        ></UserAvatar>
      )}
      <div className={styles.content}>
        <p className={styles.author}>{item.user?.name || ''}</p>
        <h3 className={styles.videoTitle}>{item.name}</h3>
        <VideoStatistic
          views={item.views}
          createdAt={item.createdAt}
        ></VideoStatistic>
      </div>
    </li>
  )
}

export default RecomendedVideo
