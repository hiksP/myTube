import { FC } from 'react'
import { IUploadField } from './UploadField.interface'
import { useUploadFile } from './useUploadFile'
import styles from './UploadFIeld.module.scss'

const UploadField: FC<IUploadField> = ({
  title,
  onChange,
  folder,
  setValue,
  setIsChosen
}) => {
  const { uploadFile } = useUploadFile(onChange, folder, setValue, setIsChosen)

  return (
    <div className={styles.file}>
      {title && <h1>{title}</h1>}
      <label>
        <span className='sr-only'>Выбери файл</span>
        <input type='file' onChange={uploadFile}></input>
      </label>
    </div>
  )
}

export default UploadField
