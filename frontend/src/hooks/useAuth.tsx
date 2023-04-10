import { IAuthData } from '../types/authData.interface'

export const useAuth = (): IAuthData => ({
  user: null,
  accessToken: ''
})
