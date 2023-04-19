import { createAsyncThunk } from '@reduxjs/toolkit/'
import { IAuthData } from '../../types/authData.interface'
import { IAuthForm } from '../../types/authForm.interface'
import { AuthService } from '../../services/auth.service'
import { toastr } from 'react-redux-toastr'
import { toastError } from '../../utils/api.utils'

export const register = createAsyncThunk<IAuthData, IAuthForm>(
  '/auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(email, password)
      toastr.success('Регистрация', 'Успешно выполнена')
      return response
    } catch (error) {
      toastError(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const login = createAsyncThunk<IAuthData, IAuthForm>(
  '/auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(email, password)
      toastr.success('Вход', 'Успешно выполнена')
      return response
    } catch (error) {
      toastError(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const signout = createAsyncThunk('/auth/logout', async () => {
  return {}
})
