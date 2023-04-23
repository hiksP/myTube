import { FC } from 'react'
import Layout from '../../Layout/Layout'
import { api } from '../../../store/api/api'
import { useAuth } from '../../../hooks/useAuth'
import Menu from '../../ui/Menu/Menu'
import Heading from '../../ui/Heading/Heading'
import styles from './Subscriptionts.module.scss'

const Subscriptions: FC = () => {
  const { user } = useAuth()

  const { data } = api.useGetProfileQuery(null)

  return (
    <Layout title={'Subscriptions'}>
      <section className={styles.subs}>
        <Heading title='Мои подписки'></Heading>
        {user && (
          <Menu
            title={''}
            items={
              data?.subscriptions.map(({ toChannel }) => ({
                image: toChannel.avatarPath,
                title: toChannel.name,
                link: '/channel/' + toChannel.id
              })) || []
            }
          />
        )}
      </section>
    </Layout>
  )
}

export default Subscriptions
