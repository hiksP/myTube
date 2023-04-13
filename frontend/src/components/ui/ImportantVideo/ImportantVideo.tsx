import { FC } from 'react'
import styles from './ImportantVideo.module.scss'
import iran from '../../../assets/iran.jpg'
import Image from 'next/image'
import avatar from '../../../assets/avatar.jpg'

export interface IImportantVideo {
  isTrendy: boolean
}

const ImportantVideo: FC<IImportantVideo> = ({ isTrendy }) => {
  const width = isTrendy ? 700 : 500
  const height = isTrendy ? 300 : 200

  return (
    <div className={styles.mostPopular}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.thumbnail}
          src={iran}
          width={width}
          height={height}
          alt='video'
        ></Image>
      </div>
      <div className={styles.content}>
        <h3 className={isTrendy ? styles.title : styles.titleSmall}>
          Иран усачев
        </h3>
        <Image
          className={styles.avatar}
          src={avatar}
          width={50}
          height={50}
          alt='avatar'
        ></Image>
        <p className={styles.name}>Руслан Усачев</p>
        <div
          className={
            isTrendy ? styles.infoContainer : styles.infoContainerSmall
          }
        >
          <div className={styles.viewsContainer}>
            <p className={styles.views}>500k</p>
            <p className={styles.views}>2 дня назад</p>
          </div>
          <div className={styles.durationContainer}>
            <p className={styles.time}>23m</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImportantVideo
