import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../../api/axiosApi'
import { TypeRootState } from '../store'
import { IUser } from '../../types/user.interface'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Video', 'Profile'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as TypeRootState).auth.accessToken

      if (token) headers.set('Authorization', `Bearer ${token}`)
      return headers
    }
  }),
  endpoints: builder => ({
    getProfile: builder.query<IUser, any>({
      query: () => `user/profile`,
      providesTags: () => [{ type: 'Profile' }]
    }),
    subscribeToChannel: builder.mutation<boolean, number>({
      query: id => ({
        url: `user/subscribe/${id}`,
        method: 'PATCH'
      }),
      invalidatesTags: () => [{ type: 'Profile' }]
    })
  })
})
