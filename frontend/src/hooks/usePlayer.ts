import { IVideoElement } from '../components/pages/Video/videoPlayer/videoPlayer.interface'
import { useCallback, useEffect, useRef, useState } from 'react'

export const usePlayer = () => {
  const videoRef = useRef<IVideoElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [videoTime, setVideoTime] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const originalDuration = videoRef.current?.duration
    if (originalDuration) setVideoTime(originalDuration)
  }, [videoRef.current?.duration])

  const toggleVideo = useCallback(() => {
    if (!isPlaying) {
      videoRef.current?.play()
      setIsPlaying(true)
    } else {
      videoRef.current?.pause()
      setIsPlaying(false)
    }
  }, [isPlaying])

  const forward = () => {
    if (videoRef.current) videoRef.current.currentTime += 5
  }

  const back = () => {
    if (videoRef.current) videoRef.current.currentTime -= 5
  }

  const fullscreen = () => {
    const video = videoRef.current
    if (!video) return

    if (video.requestFullscreen) {
      video.requestFullscreen()
    } else if (video.msRequestFullScreen) {
      video.msRequestFullScreen()
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen()
    } else if (video.webkitRequestFullScreen) {
      video.webkitRequestFullScreen()
    }
  }

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    const updateProgress = () => {
      setCurrentTime(video.currentTime)
      setProgress((video.currentTime / videoTime) * 100)
    }

    video.addEventListener('timeupdate', updateProgress)

    return () => {
      video.removeEventListener('timeupdate', updateProgress)
    }
  }, [videoTime])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          forward()
          break
        case 'ArrowLeft':
          back()
          break
        case ' ':
          e.preventDefault()
          toggleVideo()
          break

        default:
          return
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [toggleVideo])

  return {
    videoRef,
    toggleVideo,
    fullscreen,
    status: {
      isPlaying,
      progress,
      currentTime,
      videoTime
    }
  }
}
