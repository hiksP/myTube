import { FC } from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'
import searchPic from '../../assets/Style=Linear.svg'
import notificationPic from '../../assets/notification.svg'
import avtar from '../../assets/avatar.jpg'

const Header: FC = () => {
  return (
    <section className={styles.header}>
      <div className={styles.searchBar}>
        <Image
          className={styles.searchPic}
          src={searchPic}
          alt='search'
          width={24}
          height={24}
        />
        <input className={styles.input} placeholder='Название видео'></input>
      </div>
      <ul className={styles.list}>
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
      </ul>
    </section>
  )
}

export default Header
