import { FC } from 'react'
import Layout from '../../Layout/Layout'
import styles from './Video.module.scss'
import VideoPlayer from './videoPlayer/VideoPlayer'
import { useRouter } from 'next/router'
import { IVideo } from '../../../types/video.interface'
import { videoApi } from '../../../store/api/videoApi'

const Video: FC = () => {
  const { query } = useRouter()

  const { data: video = {} as IVideo } = videoApi.useGetVideoByIdQuery(
    Number(query.id),
    {
      skip: !query.id
    }
  )

  return (
    <Layout title={'dsa'}>
      <section className={styles.VideoPage}>
        <VideoPlayer path={video.videoPath}></VideoPlayer>
      </section>
    </Layout>
  )
}

export default Video
