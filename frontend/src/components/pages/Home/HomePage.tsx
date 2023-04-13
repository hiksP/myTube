import { FC } from 'react'
import Layout from '../../Layout/Layout'
import ImportantVideos from '../../ui/importantVideos/ImportantVideos'

const HomePage: FC = () => {
  return (
    <Layout title='MyTube'>
      <ImportantVideos></ImportantVideos>
    </Layout>
  )
}

export default HomePage
