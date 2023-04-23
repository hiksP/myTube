import { GetStaticProps, NextPage } from 'next'
import Trends from '../components/pages/Trends/Trends'
import { VideoService } from '../services/video.service'
import { IVideo } from '../types/video.interface'

const TrendsPage: NextPage<{ mostPopular: IVideo[] }> = ({ mostPopular }) => {
  return <Trends mostPopular={mostPopular}></Trends>
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: mostPopular } = await VideoService.getTrendy()
    return {
      props: {
        mostPopular: mostPopular
      },
      revalidate: 120
    }
  } catch (error) {
    return {
      props: {
        mostPopular: []
      }
    }
  }
}

export default TrendsPage
