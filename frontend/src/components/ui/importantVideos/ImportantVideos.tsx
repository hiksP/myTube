import { FC } from 'react'
import styles from './ImportantVideos.module.scss'
import iran from '../../../assets/iran.jpg'
import Image from 'next/image'
import avatar from '../../../assets/avatar.jpg'
import ImportantVideo from '../ImportantVideo/ImportantVideo'

const ImportantVideos: FC = () => {
  return (
    <section className={styles.videos}>
      <ImportantVideo isTrendy={true}></ImportantVideo>
      <ImportantVideo isTrendy={false}></ImportantVideo>
    </section>
  )
}

export default ImportantVideos
