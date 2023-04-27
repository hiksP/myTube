import { FC, useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import styles from './Video.module.scss'
import VideoPlayer from './videoPlayer/VideoPlayer'
import { useRouter } from 'next/router'
import { IVideo } from '../../../types/video.interface'
import { videoApi } from '../../../store/api/videoApi'
import Comments from './comments/Comments'
import { VideoService } from '../../../services/video.service'
import SmallVideos from '../../SmallVideos/SmallVideos'
import VideoDetail from './videoDetail/videoDetail'
import { likesApi } from '../../../store/api/likesApi'
import { ILikes } from '../../../types/like.interface'

const Video: FC = () => {
  const { query } = useRouter()

  const [someVideos, SetSomeVideos] = useState<IVideo[]>([])

  useEffect(() => {
    const fetchVideos = async () => {
      const { data } = await VideoService.getAll()
      const videoArrWithout = data.filter(v => v.id !== video.id)
      const randomVideos = videoArrWithout.sort(() => Math.random() - 0.5)
      SetSomeVideos(randomVideos.slice(0, 3))
    }
    fetchVideos()
  }, [query])

  const { data: video = {} as IVideo } = videoApi.useGetVideoByIdQuery(
    Number(query.id),
    {
      skip: !query.id
    }
  )

  const { data: likes = {} as ILikes } = likesApi.useGetLikesByIdQuery(
    Number(query.id),
    {
      skip: !query.id
    }
  )

  return (
    <Layout title={video.name}>
      <section className={styles.VideoPage}>
        <div className={styles.top}>
          <VideoPlayer path={video.videoPath}></VideoPlayer>
          <div className={styles.videos}>
            <p className={styles.toWatch}>Советуем к просмотру:</p>
            <SmallVideos videos={someVideos}></SmallVideos>
          </div>
        </div>
        <VideoDetail video={video} likes={likes}></VideoDetail>
        <Comments comments={video.comments} videoId={video.id}></Comments>
      </section>
    </Layout>
  )
}

export default Video
