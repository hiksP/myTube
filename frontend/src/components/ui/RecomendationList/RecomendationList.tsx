import { FC } from 'react'
import styles from './RecomendationList.module.scss'
import RecomendedVideo from '../RecomendedVideo/RecomendedVideo'
import { IRecomendations } from '../../Recomendations/Recomendations'
import { useRouter } from 'next/router'

const RecomendationList: FC<IRecomendations> = ({
  videos,
  removeHandler,
  isUpdateLink
}) => {
  const { pathname } = useRouter()

  const isChannelPage = pathname === '/channel[id]'

  return (
    <ul
      className={
        isChannelPage ? `${styles.list} + ' ' + ${styles.between}` : styles.list
      }
    >
      {videos.map(video => (
        <RecomendedVideo
          item={video}
          key={video.id}
          removeHandler={removeHandler}
          isUpdateLink={isUpdateLink}
        ></RecomendedVideo>
      ))}
    </ul>
  )
}

export default RecomendationList
