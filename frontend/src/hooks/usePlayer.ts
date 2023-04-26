// @ts-nocheck
// доделать нормальный фулскрин
import { IVideoElement } from '../components/pages/Video/videoPlayer/videoPlayer.interface'
import { useCallback, useEffect, useRef, useState } from 'react'
import hotkeys from 'hotkeys-js'

export const usePlayer = () => {
  const videoRef = useRef<IVideoElement>(null)
  const widthRef = useRef(null)

  const [videoBarWidth, setVideoBarWidth] = useState(0)
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
    if (videoRef.current) videoRef.current.currentTime += 2
  }

  const back = () => {
    if (videoRef.current) videoRef.current.currentTime -= 2
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

  const goOnClick = (e: MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current

    if (!video) return

    const rect = widthRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left

    if (videoBarWidth == 0) {
      setVideoBarWidth(e.target.clientWidth)
    }

    if (videoBarWidth > 0) {
      const placeToGoTo = x / (videoBarWidth / 100)
      video.currentTime = (video.duration / 100) * placeToGoTo
      return
    }

    const placeToGoTo = x / (e.target.clientWidth / 100)
    video.currentTime = (video.duration / 100) * placeToGoTo
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
    hotkeys('right', e => {
      forward()
    })
    hotkeys('left', e => {
      back()
    })
    // hotkeys('f', e => {
    //   e.preventDefault()
    //   fullscreen()
    // })
    hotkeys('space', e => {
      e.preventDefault()
      toggleVideo()
    })
  }, [toggleVideo])

  return {
    videoRef,
    toggleVideo,
    fullscreen,
    goOnClick,
    widthRef,
    status: {
      isPlaying,
      progress,
      currentTime,
      videoTime
    }
  }
}
