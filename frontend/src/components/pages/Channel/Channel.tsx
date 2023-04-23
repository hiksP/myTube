import { FC } from 'react'
import styles from './Channel.module.scss'
import Image from 'next/image'
import { IChannel } from '../../../pages/channel/[id]'
import Layout from '../../Layout/Layout'
import UserAvatar from '../../ui/userAvatar/UserAvatar'
import Recomendations from '../../Recomendations/Recomendations'
import numberFormatting from '../../../utils/numberFormatting.utils'
import SubscribeButton from '../../ui/SubscribeButton/SubscribeButton'

const Channel: FC<IChannel> = ({ channel }) => {
  const videosByViews = channel.videos?.sort(
    (video, b) => b.views - video.views
  )

  return (
    <Layout title={channel.name}>
      <section className={styles.channel}>
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.container}>
              <UserAvatar
                avatar={String(channel.avatarPath)}
                name={channel.name}
                isVerified={!!channel.isVerified}
                id={Number(channel.id)}
                isChannel={true}
              ></UserAvatar>
              <div className={styles.info}>
                <h2 className={styles.name}>{channel.name}</h2>
                <p className={styles.subscribers}>
                  {Number(channel.subscribersCount) + ' Подписчиков'}
                </p>
              </div>
            </div>
            <p className={styles.description}>{channel.description}</p>
          </div>
          <SubscribeButton channelId={channel.id}></SubscribeButton>
        </div>
        <Recomendations
          videos={videosByViews || []}
          title={'Самые популярные'}
        ></Recomendations>
      </section>
    </Layout>
  )
}

export default Channel
