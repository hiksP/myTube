import { axiosApi } from '../api/axiosApi'
import { IVideo } from '../types/video.interface'

export const VideoService = {
  async getAll() {
    return axiosApi.get<IVideo[]>('/video')
  },

  async getTrendy() {
    return axiosApi.get<IVideo>(`/video/trends`)
  }
}
