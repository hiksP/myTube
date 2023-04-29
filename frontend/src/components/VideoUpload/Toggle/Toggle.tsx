import { FC } from 'react'
import styles from './Toggle.module.scss'
import { Switch } from '@headlessui/react'
import cn from 'classnames'
import { useRouter } from 'next/router'

interface IToggle {
  isEnabled: boolean
  clickHandler: (...event: any) => void
}

const Toggle: FC<IToggle> = ({ isEnabled, clickHandler }) => {
  const { pathname } = useRouter()

  const isVideoEdit = pathname === '/video/edit/[id]'

  return (
    <div className={styles.wrapper}>
      <Switch
        checked={isEnabled}
        onChange={clickHandler}
        className={cn(styles.switch, {
          'bg-darkRed': isEnabled,
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
      <span
        className={!isVideoEdit ? styles.public : styles.publicBlack}
        onClick={clickHandler}
      >
        Публичное видео
      </span>
    </div>
  )
}

export default Toggle
