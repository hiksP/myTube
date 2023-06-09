import { axiosApi } from '../api/axiosApi'
import { IAuthData } from '../types/authData.interface'

export const AuthService = {
  async login(email: string, password: string) {
    const response = await axiosApi.post<IAuthData>('/auth/login', {
      email,
      password
    })
    return response.data
  },

  async register(email: string, password: string) {
    const response = await axiosApi.post<IAuthData>('/auth/register', {
      email,
      password
    })
    return response.data
  }
}
