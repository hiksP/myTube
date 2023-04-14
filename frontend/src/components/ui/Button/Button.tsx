import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button className={cn(styles.button, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
