import { FC } from 'react'
import styles from './RecomendedVideo.module.scss'
import numberFormatting from '../../../utils/numberFormatting.utils'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

interface IVideoStatistic {
  views: number
  createdAt?: string
  isWhite?: boolean
}

dayjs.extend(relativeTime)

const VideoStatistic: FC<IVideoStatistic> = ({
  views,
  createdAt,
  isWhite = false
}) => {
  return (
    <div className={styles.infoContainer}>
      <p className={isWhite ? styles.infoWhite : styles.info}>
        {numberFormatting(views) + ' views'}
      </p>
      {!!createdAt && (
        <p className={isWhite ? styles.infoWhite : styles.info}>
          {dayjs(new Date(createdAt)).fromNow()}
        </p>
      )}
    </div>
  )
}

export default VideoStatistic
