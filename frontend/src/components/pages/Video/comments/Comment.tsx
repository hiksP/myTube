import { FC } from 'react'
import styles from './Comments.module.scss'
import Image from 'next/legacy/image'
import { IComment } from '../../../../types/comment.interface'

const Comment: FC<{ comment: IComment }> = ({ comment }) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        width={35}
        height={35}
        alt={comment.user.name}
        layout='fixed'
        src={String(comment.user.avatarPath)}
      />
      <div className={styles.user}>
        <p className={styles.name}>{comment.user.name}</p>
        <p className={styles.text}>{comment.message}</p>
      </div>
    </div>
  )
}

export default Comment
