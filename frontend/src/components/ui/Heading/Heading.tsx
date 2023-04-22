import { FC } from 'react'
import styles from './Heading.module.scss'

const Heading: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line}>
        <div className={styles.box}></div>
      </div>
    </div>
  )
}

export default Heading
