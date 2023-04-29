import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { videoApi } from '../../../store/api/videoApi'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IVideoDto } from '../../../types/video.interface'
import { toastr } from 'react-redux-toastr'
import Layout from '../../Layout/Layout'
import Loader from '../../ui/Loader/Loader'
import styles from './VideoEdit.module.scss'
import AuthInput from '../../ui/AuthInput/AuthInput'
import { IMediaResponse } from '../../../services/media/media.interface'
import FooterForm from '../../VideoUpload/FooterForm/FooterForm'
import Toggle from '../../VideoUpload/Toggle/Toggle'
import UploadField from '../../ui/UploadField/UploadField'
import VideoInfo from '../../VideoUpload/VideoInfo/VideoInfo'
import Button from '../../ui/Button/Button'

const VideoEdit: FC = () => {
  const { query } = useRouter()
  const videoId = Number(query.id)

  const { data, isLoading } = videoApi.useGetVideoByIdQuery(videoId, {
    skip: !videoId
  })

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    watch,
    setValue
  } = useForm<IVideoDto>({
    mode: 'onChange'
  })

  useEffect(() => {
    if (!watch('name') && data) {
      setValue('name', data.name)
      setValue('description', data.description)
      setValue('videoPath', data.videoPath)
      setValue('thumbnailPath', data.thumbnailPath)
      setValue('isPublic', data.isPublic)
    }
  }, [data])

  const [updateVideo, { isLoading: isUpdateLoading }] =
    videoApi.useUpdateVideoMutation()

  const { push } = useRouter()

  const onSubmit: SubmitHandler<IVideoDto> = data => {
    updateVideo({ ...data, id: videoId })
      .unwrap()
      .then(() => {
        toastr.success('Статус', 'Видео обновлено')
        push('/studio')
      })
  }

  return (
    <Layout title={'Редактирование видео'}>
      <div>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className='flex w-full flex-col'>
              <div className='flex w-full flex-row justify-between'>
                <div className={styles.container}>
                  <AuthInput
                    {...register('name', {
                      required: 'Название обязательно!'
                    })}
                    placeholder='Название'
                    error={errors.name}
                  />
                  <AuthInput
                    {...register('description', {
                      required: 'Описание обязательно!'
                    })}
                    className='min-h-[96px]'
                    placeholder='Описание'
                    error={errors.description}
                  />
                  <div className='mt-8'>
                    <Controller
                      control={control}
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
                  <div className='flex w-full flex-row items-center justify-between'>
                    <Controller
                      control={control}
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
                    <Button className={styles.button}>
                      {isUpdateLoading ? 'Ожидайте...' : 'Сохранить'}
                    </Button>
                  </div>
                </div>
                <div className={styles.rightCont}>
                  <VideoInfo
                    videoId={videoId}
                    fileName={''}
                    isUploaded
                    thumbnailPath={watch('thumbnailPath')}
                  ></VideoInfo>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </Layout>
  )
}

export default VideoEdit
