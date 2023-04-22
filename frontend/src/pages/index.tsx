import { GetStaticProps, NextPage } from 'next'
import HomePage from '../components/pages/Home/HomePage'
import { IHome } from '../types/home.interface'
import { IVideo } from '../types/video.interface'
import { VideoService } from '../services/video.service'

const Home: NextPage<IHome> = props => {
  return (
    <>
      <HomePage {...props}></HomePage>
    </>
  )
}

const getRandomVideo = (videos: IVideo[]) => {
  const randomIndex = Math.floor(Math.random() * videos.length)
  return videos[randomIndex]
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: newVideos } = await VideoService.getAll()
    const { data: mostPopular } = await VideoService.getTrendy()
    const notMostPopular = newVideos.filter(v => v.id !== mostPopular[0].id)
    return {
      props: {
        newVideos: newVideos.sort(() => Math.random() - 0.5),
        mostPopular: mostPopular[0],
        randomVideo: getRandomVideo(notMostPopular) || ({} as IVideo)
      } as IHome
    }
  } catch (error) {
    return {
      props: {
        newVideos: [],
        mostPopular: {} as IVideo,
        randomVideo: {} as IVideo
      } as IHome
    }
  }
}

export default Home
