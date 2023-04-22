import { FC } from 'react'
import styles from './Recomendations.module.scss'
import RecomendedVideo from '../ui/RecomendedVideo/RecomendedVideo'
import RecomendationList from '../ui/RecomendationList/RecomendationList'
import { IVideo } from '../../types/video.interface'
import Heading from '../ui/Heading/Heading'

export interface IRecomendations {
  videos: IVideo[]
  title?: string
  removeHandler?: (videoId: number) => void
  isUpdateLink?: boolean
}

const Recomendations: FC<IRecomendations> = ({ videos, title }) => {
  return (
    <section className={styles.recomendations}>
      <Heading title={title || 'Рекомендации'}></Heading>
      <RecomendationList videos={videos}></RecomendationList>
    </section>
  )
}

export default Recomendations
