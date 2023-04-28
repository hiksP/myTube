import { FC } from 'react'
import styles from './FooterForm.module.scss'
import { MdCheckCircle, MdUpload } from 'react-icons/md'
import Button from '../../ui/Button/Button'

const FooterForm: FC<{ percent: number; isUploaded: boolean }> = ({
  percent,
  isUploaded
}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.status}>
        {isUploaded ? <MdCheckCircle /> : <MdUpload />}
        <span>
          {isUploaded ? 'Видео загружено' : `Загружается ${percent}%...`}
        </span>
      </div>
      <div>
        <Button className='mt-0'>Save</Button>
      </div>
    </div>
  )
}

export default FooterForm
