import { axiosApi } from '../api/axiosApi'
import { IUser } from '../types/user.interface'

export const UserService = {
  async getAll() {
    return axiosApi.get<IUser[]>('/user')
  },

  async getUser(id: number) {
    return axiosApi.get<IUser>(`/user/by-id/${id}`)
  }
}
