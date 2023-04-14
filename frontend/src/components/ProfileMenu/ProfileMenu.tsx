import { FC } from 'react'
import styles from './ProfileMenu.module.scss'
import Image from 'next/image'
import notificationPic from '../../assets/notification.svg'
import avtar from '../../assets/avatar.jpg'

const ProfileMenu: FC = () => {
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
