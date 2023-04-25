import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ICommentDto } from '../../../../types/comment.interface'
import { commentApi } from '../../../../store/api/commentApi'
import styles from './Comments.module.scss'
import AuthInput from '../../../ui/AuthInput/AuthInput'

const CommentForm: FC<{ videoId: number }> = ({ videoId }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<ICommentDto>({
    mode: 'onChange'
  })

  const [writeComment, { isLoading }] = commentApi.useCreateCommentMutation()

  const onSubmit: SubmitHandler<ICommentDto> = async data => {
    writeComment({ ...data, videoId })
      .unwrap()
      .then(() => reset())
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <AuthInput
          className={'w-full'}
          {...register('message', {
            required: 'Вы забыли написать сообщение!'
          })}
          placeholder='Напиши комментарий'
          error={errors.message}
        ></AuthInput>
        <button className={styles.button} disabled={isLoading}>
          Отправить
        </button>
      </div>
    </form>
  )
}

export default CommentForm
