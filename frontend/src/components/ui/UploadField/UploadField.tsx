import { FC } from 'react'
import { IUploadField } from './UploadField.interface'
import { useUploadFile } from './useUploadFile'
import styles from './UploadFIeld.module.scss'
import { useRouter } from 'next/router'

const UploadField: FC<IUploadField> = ({
  title,
  onChange,
  folder,
  setValue,
  setIsChosen
}) => {
  const { uploadFile } = useUploadFile(onChange, folder, setValue, setIsChosen)

  const { pathname } = useRouter()

  const isVideoEditPage = pathname === '/video/edit/[id]'

  return (
    <div className={styles.file}>
      {title && <h1>{title}</h1>}
      <label className={!isVideoEditPage ? styles.label : styles.labelDark}>
        <span className='sr-only'>Выбери файл</span>
        <input
          type='file'
          className={!isVideoEditPage ? styles.input : styles.inputDark}
          onChange={uploadFile}
        ></input>
      </label>
    </div>
  )
}

export default UploadField
