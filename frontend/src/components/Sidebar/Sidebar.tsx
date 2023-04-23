import { FC } from 'react'
import styles from './Sidebar.module.scss'
import Image from 'next/image'
import logoHeader from '../../assets/logoHeader.png'
import { menuItems } from '../ui/Menu/menu.data'
import Menu from '../ui/Menu/Menu'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../store/api/api'

const Sidebar: FC = () => {
  const { user } = useAuth()

  const { data, isLoading } = api.useGetProfileQuery(null, {
    skip: !user
  })

  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <Image
          src={logoHeader}
          className={styles.logo}
          width={45}
          height={45}
          alt='logo'
        />
        <h1 className={styles.title}>MyTube</h1>
      </div>
      <nav>
        <Menu items={menuItems} title='Меню'></Menu>
        <div className={styles.line}></div>
      </nav>
      {user && (
        <Menu
          title={'Мои подписки'}
          items={
            data?.subscriptions.map(({ toChannel }) => ({
              image: toChannel.avatarPath,
              title: toChannel.name,
              link: '/channel/' + toChannel.id
            })) || []
          }
        />
      )}
    </div>
  )
}

export default Sidebar
