import { FC } from 'react'
import styles from './Comments.module.scss'
import { IComment } from '../../../../types/comment.interface'
import Comment from './Comment'
import { useAuth } from '../../../../hooks/useAuth'
import CommentForm from './CommentForm'

const Comments: FC<{ comments: IComment[]; videoId: number }> = ({
  comments,
  videoId
}) => {
  const { user } = useAuth()

  return (
    <>
      <h2 className={styles.title}>Комментарии</h2>
      {user && <CommentForm videoId={videoId}></CommentForm>}
      {comments?.length ? (
        <ul className={styles.list}>
          {comments.map(comment => (
            <Comment comment={comment} key={comment.id}></Comment>
          ))}
        </ul>
      ) : (
        <p className={styles.last}>Комментариев нет!</p>
      )}
    </>
  )
}

export default Comments
