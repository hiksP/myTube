import { FC } from 'react'
import styles from './ProfileMenu.module.scss'
import Image from 'next/image'
import notificationPic from '../../assets/notification.svg'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../store/api/api'
import { useClosing } from '../../hooks/useClosing'
import { useActions } from '../../hooks/useAction'
import { FaUser } from 'react-icons/fa'
import { SiYoutubestudio } from 'react-icons/si'
import { GrLogout } from 'react-icons/gr'
import Link from 'next/link'

const ProfileMenu: FC = () => {
  const { user } = useAuth()

  const { data, isLoading } = api.useGetProfileQuery(null, {
    skip: !user
  })

  console.log(data?.avatarPath)

  const { isShow, setIsShow, ref } = useClosing(false)

  const { signout } = useActions()

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
      <button
        onClick={() => setIsShow(!isShow)}
        className={styles.avatarContainer}
      >
        <Image
          src={String(data?.avatarPath)}
          className={styles.avatar}
          width={50}
          height={50}
          alt='avatar'
          priority
        />
        {isShow && (
          <div className={styles.menu}>
            <div className={styles.upperContainer}>
              <Image
                src={String(data?.avatarPath)}
                className={styles.avatar}
                width={37}
                height={37}
                alt='avatar'
                priority
              />
              <div className={styles.info}>
                <p className={styles.name}>{data?.name}</p>
                <p className={styles.name}>{data?.email}</p>
              </div>
            </div>
            <ul className={styles.list}>
              <Link href={`/channel/${user?.id}`}>
                <li className={styles.el}>
                  <FaUser className={styles.icon} />
                  <p className={styles.elName}>Мой канал</p>
                </li>
              </Link>
              <Link href={'/studio'}>
                <li className={styles.el}>
                  <SiYoutubestudio className={styles.icon} />
                  <p className={styles.elName}>Студия</p>
                </li>
              </Link>
              <button onClick={signout}>
                <li className={styles.el}>
                  <GrLogout className={styles.icon} />
                  <p className={styles.elName}>Выйти</p>
                </li>
              </button>
            </ul>
          </div>
        )}
      </button>
    </>
  )
}

export default ProfileMenu
