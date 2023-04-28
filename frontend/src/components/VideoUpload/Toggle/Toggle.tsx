import { FC } from 'react'
import styles from './Toggle.module.scss'
import { Switch } from '@headlessui/react'
import cn from 'classnames'

interface IToggle {
  isEnabled: boolean
  clickHandler: (...event: any) => void
}

const Toggle: FC<IToggle> = ({ isEnabled, clickHandler }) => {
  return (
    <div className={styles.wrapper}>
      <Switch
        checked={isEnabled}
        onChange={clickHandler}
        className={cn(styles.switch, {
          'bg-darkRed bg-opacity-70': isEnabled,
          'bg-lightBlack': !isEnabled
        })}
      >
        <span
          className={cn(styles.point, {
            'translate-x-8': isEnabled,
            'translate-x-1': !isEnabled
          })}
        ></span>
      </Switch>
      <span className={styles.public} onClick={clickHandler}>
        Публичное видео
      </span>
    </div>
  )
}

export default Toggle
