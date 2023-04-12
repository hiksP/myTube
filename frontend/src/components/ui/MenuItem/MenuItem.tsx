import { FC } from 'react'
import styles from './MenuItem.module.scss'
import { IMenuItem } from '../../../types/menuItem.interface'
import Link from 'next/link'
import { useAuth } from '../../../hooks/useAuth'
import { useRouter } from 'next/router'
import Image from 'next/image'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const { user } = useAuth()

  const { asPath } = useRouter()

  const iconClassName =
    asPath === item.link
      ? `${styles.icon + ' ' + `${styles.iconActive}`}`
      : styles.icon

  if (item.link === 'my-channel') {
    if (!user) return null
    else item.link = `channel/${user?.id}`
  }

  return (
    <li className={styles.item}>
      <Link href={item.link} className={styles.link}>
        <p className={styles.container}>
          <span className={item.image ? styles.image : iconClassName}>
            {item.icon && <item.icon />}
            {item.image && (
              <Image
                src={item.image}
                width={35}
                height={35}
                alt={item.title}
              ></Image>
            )}
          </span>
          <b
            className={asPath === item.link ? styles.titleActive : styles.title}
          >
            {item.title}
          </b>
        </p>
      </Link>
    </li>
  )
}

export default MenuItem
