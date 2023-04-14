import { FC } from 'react'
import Layout from '../../Layout/Layout'
import ImportantVideos from '../../ui/importantVideos/ImportantVideos'
import Recomendations from '../../Recomendations/Recomendations'

const HomePage: FC = () => {
  return (
    <Layout title='MyTube'>
      <ImportantVideos></ImportantVideos>
      <Recomendations></Recomendations>
    </Layout>
  )
}

export default HomePage
