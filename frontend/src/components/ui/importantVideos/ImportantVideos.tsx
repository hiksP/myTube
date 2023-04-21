import { FC } from 'react'
import styles from './ImportantVideos.module.scss'
import iran from '../../../assets/iran.jpg'
import Image from 'next/image'
import avatar from '../../../assets/avatar.jpg'
import ImportantVideo from '../ImportantVideo/ImportantVideo'
import { IVideo } from '../../../types/video.interface'

interface IImportantVideos {
  mostPopular: IVideo
  randomVideo: IVideo
}

const ImportantVideos: FC<IImportantVideos> = ({
  mostPopular,
  randomVideo
}) => {
  return (
    <section className={styles.videos}>
      <ImportantVideo video={mostPopular} isTrendy={true}></ImportantVideo>
      <ImportantVideo video={randomVideo} isTrendy={false}></ImportantVideo>
    </section>
  )
}

export default ImportantVideos
