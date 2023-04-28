import { FC, useState } from 'react'
import styles from './VideoUpload.module.scss'
import { videoApi } from '../../store/api/videoApi'
import { RiVideoAddFill } from 'react-icons/ri'
import VideoUploadPopup from './VideoUploadPopup'

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
      <VideoUploadPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        videoId={videoId}
      ></VideoUploadPopup>
    </>
  )
}

export default VideoUpload
