import { axiosApi } from '../../api/axiosApi'
import { IMediaResponse } from './media.interface'

export const MediaService = {
  async upload(
    media: FormData,
    folder?: string,
    setValue?: (val: number) => void
  ) {
    return axiosApi.post<IMediaResponse>('/media', media, {
      params: { folder },
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: ProgressEvent => {
        if (setValue) {
          const progress =
            (ProgressEvent.loaded / Number(ProgressEvent.total)) * 100
          setValue(Math.ceil(progress))
        }
      }
    })
  }
}
