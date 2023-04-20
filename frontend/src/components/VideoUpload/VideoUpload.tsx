import { FC, useState } from 'react'
import styles from './VideoUpload.module.scss'
import { videoApi } from '../../store/api/videoApi'
import { RiVideoAddFill } from 'react-icons/ri'

const VideoUpload: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [videoId, setVideoId] = useState<number>(0)

  const [addVideo, { isLoading }] = videoApi.useAddVideoMutation()

  return (
    <>
      <button
        disabled={isLoading}
        onClick={() => {
          addVideo()
            .unwrap()
            .then(id => {
              setVideoId(+id)
              setIsOpen(true)
            })
        }}
        className={styles.button}
      >
        <RiVideoAddFill className={styles.icon} />
      </button>
    </>
  )
}

export default VideoUpload
