import { FC } from 'react'
import { IVideo } from '../../../types/video.interface'
import Layout from '../../Layout/Layout'
import Recomendations from '../../Recomendations/Recomendations'

const Trends: FC<{ mostPopular: IVideo[] }> = ({ mostPopular }) => {
  return (
    <Layout title={'Trends'}>
      <Recomendations
        videos={mostPopular || []}
        title='Тренды'
      ></Recomendations>
    </Layout>
  )
}

export default Trends
