import { FC } from 'react'
import styles from './SubscribeButton.module.scss'
import { useAuth } from '../../../hooks/useAuth'
import { api } from '../../../store/api/api'

const SubscribeButton: FC<{
  channelId: number
}> = ({ channelId }) => {
  const { user } = useAuth()
  const { data: profile } = api.useGetProfileQuery(null, {
    skip: !user
  })

  console.log(profile)

  const [subscribe, { isLoading, data }] = api.useSubscribeToChannelMutation()

  if (user?.id === channelId) return null

  const isSubscribed =
    profile?.subscriptions.some(sub => sub.toChannel.id === channelId) || !!data

  return (
    <button
      className={
        isSubscribed
          ? `${styles.button} + ' ' + ${styles.subscribed}`
          : styles.button
      }
      onClick={() => subscribe(channelId).unwrap()}
      disabled={isLoading}
    >
      {isSubscribed ? 'Отписаться' : 'Подписаться'}
    </button>
  )
}

export default SubscribeButton
