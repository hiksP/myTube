import { FC } from 'react'
import styles from './VideoUploadForm.module.scss'

const SuccessMessage: FC = () => {
  return <div className={styles.message}>Видео успешно загружено</div>
}

export default SuccessMessage
