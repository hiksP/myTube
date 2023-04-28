import { FC } from 'react'
import { useVideoUploadForm } from './useVideoUploadForm'
import styles from './VideoUploadForm.module.scss'
import SuccessMessage from './SuccessMessage'
import AuthInput from '../../ui/AuthInput/AuthInput'
import { Controller } from 'react-hook-form'
import UploadField from '../../ui/UploadField/UploadField'
import { IMediaResponse } from '../../../services/media/media.interface'
import Toggle from '../Toggle/Toggle'
import VideoInfo from '../VideoInfo/VideoInfo'
import FooterForm from '../FooterForm/FooterForm'

const UploadVideoForm: FC<{
  videoId: number
  handleCloseModal: () => void
}> = ({ handleCloseModal, videoId }) => {
  const { form, status, media } = useVideoUploadForm({
    videoId,
    handleCloseModal
  })

  return (
    <form onSubmit={form.handleSubmit(form.onSubmit)} className={styles.form}>
      {status.isChosen && <SuccessMessage />}
      {status.isChosen ? (
        <>
          <div className='flex w-full flex-col'>
            <div className='flex w-full flex-row justify-between'>
              <div className={styles.container}>
                <AuthInput
                  {...form.register('name', {
                    required: 'Название обязательно!'
                  })}
                  placeholder='Название'
                  error={form.errors.name}
                />
                <AuthInput
                  {...form.register('description', {
                    required: 'Описание обязательно!'
                  })}
                  placeholder='Описание'
                  error={form.errors.description}
                />
                <div className='mt-8'>
                  <Controller
                    control={form.control}
                    name='thumbnailPath'
                    render={({ field: { onChange } }) => (
                      <UploadField
                        folder='thumbnails'
                        onChange={(value: IMediaResponse) => {
                          onChange(value.url)
                        }}
                      />
                    )}
                  />
                </div>
                <Controller
                  control={form.control}
                  name='isPublic'
                  render={({ field: { onChange, value } }) => (
                    <Toggle
                      clickHandler={() => {
                        onChange(!value)
                      }}
                      isEnabled={!!value}
                    />
                  )}
                />
              </div>
              <div className={styles.rightCont}>
                <VideoInfo
                  videoId={videoId}
                  fileName={media.videoFileName}
                  isUploaded={status.isUploaded}
                  thumbnailPath={media.thumbnailPath}
                ></VideoInfo>
              </div>
            </div>
            <FooterForm
              percent={status.percent}
              isUploaded={status.isUploaded}
            ></FooterForm>
          </div>
        </>
      ) : (
        <div className={styles.uploadScreen}>
          <Controller
            control={form.control}
            name='videoPath'
            render={() => (
              <UploadField
                title='Сначала загрузи видео'
                folder='videos'
                onChange={media.handleUploadVideo}
                setValue={status.setProogressPercentage}
                setIsChosen={status.setIsChosen}
              />
            )}
          />
        </div>
      )}
    </form>
  )
}

export default UploadVideoForm
