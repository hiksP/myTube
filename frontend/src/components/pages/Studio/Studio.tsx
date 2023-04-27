import { FC } from 'react'
import Layout from '../../Layout/Layout'
import { api } from '../../../store/api/api'
import { videoApi } from '../../../store/api/videoApi'
import Recomendations from '../../Recomendations/Recomendations'
import Loader from '../../ui/Loader/Loader'

const Studio: FC = () => {
  const { data, isLoading } = api.useGetProfileQuery(null)
  const [removeVideo] = videoApi.useDeleteVideoMutation()

  const videos = data?.videos

  return (
    <Layout title={'MyTube studio'}>
      {isLoading ? (
        <Loader></Loader>
      ) : videos?.length ? (
        <Recomendations
          videos={videos}
          title='Мои видео'
          removeHandler={removeVideo}
          isUpdateLink
        ></Recomendations>
      ) : (
        <h2>Нет видео!</h2>
      )}
    </Layout>
  )
}

export default Studio
