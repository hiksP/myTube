import { FC, InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import styles from './AuthInput.module.scss'
import { error } from 'console'

interface IFieldProps {
  error?: FieldError
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps
interface IField extends TypeInputPropsField {}

const AuthInput = forwardRef<HTMLInputElement, IField>(
  ({ error, type = 'text', style, ...rest }, ref) => {
    return (
      <div className={styles.input} style={style}>
        <input ref={ref} type={type} {...rest}></input>
        {error && <span className={styles.error}>{error.message}</span>}
      </div>
    )
  }
)

AuthInput.displayName = 'AuthInput'

export default AuthInput
