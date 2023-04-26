import { FC } from 'react'
import { IVideo } from '../../../../types/video.interface'
import styles from './videoDetail.module.scss'
import Image from 'next/legacy/image'
import SubscribeButton from '../../../ui/SubscribeButton/SubscribeButton'
import { AiOutlineLike } from 'react-icons/ai'
import { GrView } from 'react-icons/gr'
import { ImCalendar } from 'react-icons/im'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useRouter } from 'next/router'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import { useAuth } from '../../../../hooks/useAuth'
import { api } from '../../../../store/api/api'
import { likesApi } from '../../../../store/api/likesApi'

dayjs.extend(relativeTime)

const VideoDetail: FC<{ video: IVideo; likes: any }> = ({ video, likes }) => {
  const [updateLike, { isLoading: isLikeLoading }] =
    likesApi.useCreateLikeMutation()

  const { push } = useRouter()

  const { user } = useAuth()
  const { data: profile } = api.useGetProfileQuery(null, {
    skip: !user
  })

  return (
    <div className={styles.container}>
      <div className={styles.leftCont}>
        <h2 className={styles.title}>{video.name}</h2>
        <div className={styles.userCont}>
          <span className={styles.avatarCont}>
            <Image
              onClick={() => push(`/channel/${video.user?.id}`)}
              className={styles.avatar}
              src={video.user?.avatarPath || ''}
              alt={String(video.user?.name)}
              layout='fixed'
              width={50}
              height={50}
            />
            {video.user?.isVerified ? (
              <HiOutlineCheckCircle className={styles.verified} />
            ) : null}
          </span>
          <div className={styles.infoUser}>
            <p className={styles.name}>{video.user?.name}</p>
            <p className={styles.subs}>
              {video.user?.subscribersCount} подписчиков
            </p>
          </div>
        </div>
        <p className={styles.description}>{video.description}</p>
      </div>
      <div className={styles.rightCont}>
        <div className={styles.buttons}>
          <button
            onClick={() =>
              updateLike({ userId: profile?.id, videoId: video.id })
            }
            disabled={isLikeLoading}
            className={styles.like}
          >
            <AiOutlineLike className={'mr-1'} /> Лайк
          </button>
          <SubscribeButton channelId={Number(video.user?.id)}></SubscribeButton>
        </div>
        <ul className={styles.statistic}>
          <li className={styles.statisticItem}>
            <ImCalendar />
            <p className={styles.statisticText}>
              {video.views + ' просмотров'}
            </p>
          </li>
          <li className={styles.statisticItem}>
            <AiOutlineLike />
            <p className={styles.statisticText}>{likes[1] + ' лайков'}</p>
          </li>
          <li className={styles.statisticItem}>
            <GrView />
            <p className={styles.statisticText}>
              {dayjs(new Date(video.createdAt)).fromNow()}
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default VideoDetail
