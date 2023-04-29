import { FC } from 'react'
import Image from 'next/image'
import styles from './UserAvatar.module.scss'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface IUserAvatar {
  avatar: string
  name: string
  isVerified: boolean
  id: number
  isChannel: boolean
}

const UserAvatar: FC<IUserAvatar> = ({
  avatar,
  name,
  isVerified,
  id,
  isChannel
}) => {
  return (
    <Link href={`/channel/${id}`} className={styles.link}>
      <Image
        className={styles.avatar}
        src={avatar}
        alt={name}
        width={50}
        height={50}
      />
      {isVerified && (
        <HiOutlineCheckCircle
          className={isChannel ? styles.isVerifiedBig : styles.isVerified}
        />
      )}
    </Link>
  )
}

export default UserAvatar
