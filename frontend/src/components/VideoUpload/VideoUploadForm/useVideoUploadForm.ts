import { SubmitHandler, useForm } from 'react-hook-form'
import { IVideoDto } from '../../../types/video.interface'
import { videoApi } from '../../../store/api/videoApi'
import { useState } from 'react'
import { IMediaResponse } from '../../../services/media/media.interface'

interface IUseVideoUploadForm {
  handleCloseModal: () => void
  videoId: number
}

export const useVideoUploadForm = ({
  handleCloseModal,
  videoId
}: IUseVideoUploadForm) => {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    watch,
    setValue,
    reset
  } = useForm<IVideoDto>({
    mode: 'onChange'
  })

  const [updateVideo, { isSuccess }] = videoApi.useUpdateVideoMutation()

  const onSubmit: SubmitHandler<IVideoDto> = data => {
    updateVideo({ ...data, id: videoId })
      .unwrap()
      .then(() => {
        handleCloseModal()
        reset()
      })
  }

  const videoPath = watch('videoPath')
  const thumbnailPath = watch('thumbnailPath')
  const [videoFileName, setVideoFileName] = useState('')

  const handleUploadVideo = (value: IMediaResponse) => {
    setValue('videoPath', value.url)
    setValue('name', value.name)
    setVideoFileName(value.name)
  }

  const [isChosen, setIsChosen] = useState(false)

  const [percent, setPercent] = useState(0)
  const [isUploaded, setIsUploaded] = useState(false)

  const setProogressPercentage = (val: number) => {
    setPercent(val)
    if (val === 100) setIsUploaded(true)
  }

  return {
    form: {
      register,
      errors,
      control,
      handleSubmit,
      onSubmit
    },
    media: {
      videoPath,
      thumbnailPath,
      videoFileName,
      handleUploadVideo
    },
    status: {
      isSuccess,
      isChosen,
      setIsChosen,
      percent,
      isUploaded,
      setProogressPercentage
    }
  }
}
