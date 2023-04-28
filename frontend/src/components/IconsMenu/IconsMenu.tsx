import { FC } from 'react'
import styles from './IconsMenu.module.scss'
import { useAuth } from '../../hooks/useAuth'
import ProfileMenu from '../ProfileMenu/ProfileMenu'
import Auth from '../Auth/Auth'

const IconsMenu: FC = () => {
  const { user } = useAuth()

  return (
    <div className={styles.list}>
      {user ? (
        <>
          <ProfileMenu></ProfileMenu>
        </>
      ) : (
        <Auth></Auth>
      )}
    </div>
  )
}

export default IconsMenu
