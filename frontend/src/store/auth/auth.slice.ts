import { createSlice } from '@reduxjs/toolkit'
import { IAuthInitialState } from './auth.interface'
import { login, register, signout } from './auth.action'

const initialState: IAuthInitialState = {
  user: null,
  accessToken: '',
  isLoading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = false
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
        state.accessToken = payload.accessToken
      })
      .addCase(register.rejected, state => {
        state.isLoading = false
        state.user = null
        state.accessToken = ''
      })
      .addCase(login.pending, state => {
        state.isLoading = false
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
        state.accessToken = payload.accessToken
      })
      .addCase(login.rejected, state => {
        state.isLoading = false
        state.user = null
        state.accessToken = ''
      })
      .addCase(signout.fulfilled, state => {
        state.isLoading = false
        state.user = null
        state.accessToken = ''
      })
  }
})
