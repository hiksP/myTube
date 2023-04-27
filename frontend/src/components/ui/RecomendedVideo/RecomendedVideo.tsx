import { FC } from 'react'
import styles from './RecomendedVideo.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/legacy/image'
import VideoStatistic from './VideoStatistic'
import { IVideoItem } from '../../../types/videoItem.interface'
import UserAvatar from '../userAvatar/UserAvatar'
import { MdDeleteOutline } from 'react-icons/md'
import { FiEdit2 } from 'react-icons/fi'

const RecomendedVideo: FC<IVideoItem> = ({
  item,
  isUpdateLink,
  removeHandler
}) => {
  const { push, pathname } = useRouter()

  const isChannelPage = pathname === `/channel/[id]`
  const isStudio = pathname === '/studio'

  return (
    <li className={styles.item}>
      <time className={styles.duration}>{item.duration}</time>
      <span onClick={() => push(`/video/${item.id}`)}>
        <Image
          src={item.thumbnailPath || ''}
          className={styles.thumbnail}
          width={185}
          height={103}
          layout='responsive'
          alt={item.name}
        ></Image>
      </span>
      {isChannelPage || isStudio ? null : (
        <UserAvatar
          avatar={item.user?.avatarPath || ''}
          name={String(item.user?.name)}
          isVerified={!!item.user?.isVerified}
          id={Number(item.user?.id)}
          isChannel={isChannelPage}
        ></UserAvatar>
      )}
      <div className={styles.content}>
        <p className={styles.author}>{item.user?.name || ''}</p>
        <h3 className={styles.videoTitle}>{item.name}</h3>
        <div className={styles.admin}>
          {!!removeHandler && (
            <button
              className={styles.adminButton}
              onClick={() => removeHandler(item.id)}
            >
              <MdDeleteOutline className={styles.remove}></MdDeleteOutline>
            </button>
          )}
          {isUpdateLink && (
            <button
              className={styles.adminButton}
              onClick={() => push(`/video/edit/${item.id}`)}
            >
              <FiEdit2 className={styles.update}></FiEdit2>
            </button>
          )}
        </div>
        <VideoStatistic
          views={item.views}
          createdAt={item.createdAt}
        ></VideoStatistic>
      </div>
    </li>
  )
}

export default RecomendedVideo
