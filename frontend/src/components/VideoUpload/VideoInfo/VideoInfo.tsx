import { FC } from 'react'
import styles from './VideoInfo.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface IVideoInfo {
  videoId: number
  thumbnailPath: string
  fileName: string
  isUploaded: boolean
}

const VideoInfo: FC<IVideoInfo> = ({
  videoId,
  thumbnailPath,
  fileName,
  isUploaded
}) => {
  return (
    <div className={styles.info}>
      {!thumbnailPath ? (
        <div className={styles.load}>
          {!isUploaded ? 'Идет загрузка...' : 'Загрузите превью!'}
        </div>
      ) : (
        <Image
          className={styles.image}
          src={thumbnailPath}
          width={344}
          height={190}
          alt=''
        />
      )}
      <div className={styles.detail}>
        <div>
          <span>Ссылка: </span>
          <span>
            <Link legacyBehavior href={`/video/${videoId}`}>
              <a>http://localhost:3000/{videoId}</a>
            </Link>
          </span>
        </div>
        <div>
          <span>Название файла: </span>
          <span>{fileName}</span>
        </div>
      </div>
    </div>
  )
}

export default VideoInfo
