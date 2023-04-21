import { FC } from 'react'
import Image from 'next/image'
import styles from './UserAvatar.module.scss'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import Link from 'next/link'

interface IUserAvatar {
  avatar: string
  name: string
  isVerified: boolean
  id: number
}

const UserAvatar: FC<IUserAvatar> = ({ avatar, name, isVerified, id }) => {
  return (
    <Link href={`channel/${id}`} className={styles.link}>
      <Image
        className={styles.avatar}
        src={avatar}
        alt={name}
        width={50}
        height={50}
      />
      {isVerified && (
        <span className={styles.isVerified}>
          <HiOutlineCheckCircle />
        </span>
      )}
    </Link>
  )
}

export default UserAvatar
