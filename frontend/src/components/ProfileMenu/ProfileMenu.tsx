import { FC } from 'react'
import styles from './ProfileMenu.module.scss'
import Image from 'next/image'
import notificationPic from '../../assets/notification.svg'
import avtar from '../../assets/avatar.jpg'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../store/api/api'
import { API_URL } from '../../api/axiosApi'

const ProfileMenu: FC = () => {
  const { user } = useAuth()

  const { data, isLoading } = api.useGetProfileQuery(null, {
    skip: !user
  })

  if (isLoading) return null

  return (
    <>
      <div className={styles.notificationContainer}>
        <Image
          src={notificationPic}
          alt='notification'
          width={30}
          height={30}
        />
      </div>
      <div className={styles.avatarContainer}>
        <Image
          src={avtar}
          className={styles.avatar}
          width={50}
          height={50}
          alt='avatar'
        />
      </div>
    </>
  )
}

export default ProfileMenu
