import { FC } from 'react'
import Layout from '../../Layout/Layout'
import ImportantVideos from '../../ui/importantVideos/ImportantVideos'
import Recomendations from '../../Recomendations/Recomendations'
import { IHome } from '../../../types/home.interface'

const HomePage: FC<IHome> = ({ randomVideo, mostPopular, newVideos }) => {
  return (
    <Layout title='MyTube'>
      <ImportantVideos
        mostPopular={mostPopular}
        randomVideo={randomVideo}
      ></ImportantVideos>
      <Recomendations videos={newVideos}></Recomendations>
    </Layout>
  )
}

export default HomePage
