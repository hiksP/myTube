import { FC, useEffect, useState } from 'react'
import { usePlayer } from '../../../../hooks/usePlayer'
import styles from './videoPlayer.module.scss'
import { SlControlPause, SlControlPlay } from 'react-icons/sl'
import { RiFullscreenFill } from 'react-icons/ri'

const VideoPlayer: FC<{ path: string }> = ({ path }) => {
  const { videoRef, toggleVideo, goOnClick, status, widthRef, fullscreen } =
    usePlayer()

  const [isHovered, setIsHovered] = useState(false)
  const [controllClass, setControllClass] = useState(`${styles.controls}`)

  useEffect(() => {
    if (isHovered) setControllClass(`${styles.controls}`)
    if (status.isPlaying && isHovered) setControllClass(`${styles.controls}`)
    if (!isHovered) setControllClass(`${styles.controls + ' ' + styles.hide}`)
    if (!status.isPlaying) setControllClass(`${styles.controls}`)
  }, [isHovered, status.isPlaying])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.wraper}
    >
      <video
        ref={videoRef}
        className={styles.player}
        src={`${path}`}
        preload='metadata'
        onClick={toggleVideo}
      ></video>
      <div className={controllClass}>
        <button onClick={toggleVideo}>
          {status.isPlaying ? (
            <SlControlPause className={styles.button} />
          ) : (
            <SlControlPlay className={styles.button} />
          )}
        </button>
        <div
          ref={widthRef}
          onClick={e => goOnClick(e)}
          className={styles.container}
        >
          <div
            className={styles.progressBar}
            style={{ width: `${status.progress}%` }}
          ></div>
        </div>
        <div className={styles.time}>
          <p className={styles.text}>
            {Math.floor(status.currentTime / 60) +
              ':' +
              ('0' + Math.floor(status.currentTime % 60)).slice(-2)}
          </p>
          <p className={styles.textBetween}>/</p>
          <p className={styles.text}>
            {Math.floor(status.videoTime / 60) +
              ':' +
              ('0' + Math.floor(status.videoTime % 60)).slice(-2)}
          </p>
        </div>
        <button className={styles.button} onClick={fullscreen}>
          <RiFullscreenFill className={styles.button} />
        </button>
      </div>
    </div>
  )
}

export default VideoPlayer
