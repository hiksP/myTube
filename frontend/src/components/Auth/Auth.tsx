import { FC, useState } from 'react'
import styles from './Auth.module.scss'
import { useClosing } from '../../hooks/useClosing'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthForm } from '../../types/authForm.interface'
import Link from 'next/link'
import { FaHouseUser } from 'react-icons/fa'
import Button from '../ui/Button/Button'
import AuthInput from '../ui/AuthInput/AuthInput'

const Auth: FC = () => {
  const { ref, setIsShow, isShow } = useClosing(false)

  const [type, setType] = useState<'login' | 'register'>('login')

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IAuthForm>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IAuthForm> = data => {}

  return (
    <div className={styles.container}>
      <button onClick={() => setIsShow(!isShow)}>
        <FaHouseUser className={styles.icon}></FaHouseUser>
      </button>
      {isShow ? (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <AuthInput
            {...register('email', {
              required: 'Вы пропустили E-mail',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Введите верный Email'
              }
            })}
            placeholder='E-mail'
            error={errors.email}
          />
          <AuthInput
            {...register('password', {
              required: 'Вы пропустили пароль',
              minLength: {
                value: 6,
                message: 'Пароль не может быть короче 6 символов!'
              }
            })}
            placeholder='Пароль'
            error={errors.password}
          />
          <Button onClick={() => setType('login')}>Войти</Button>
          <button className={styles.link} onClick={() => setType('register')}>
            Регистрация
          </button>
        </form>
      ) : null}
    </div>
  )
}

export default Auth
