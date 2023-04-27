import { IVideo, IVideoDto } from '../../types/video.interface'
import { api } from './api'

export const videoApi = api.injectEndpoints({
  endpoints: builder => ({
    getVideoBySearchName: builder.query<IVideo[], string>({
      query: searchName => ({ url: '/video', params: { searchName } })
    }),
    getVideoById: builder.query<IVideo, number>({
      query: id => `/video/${id}`,
      providesTags: (result, error, id) => [{ type: 'Video', id }]
    }),
    getPrivateVideo: builder.query<IVideo, number>({
      query: id => `/video/get-private/${id}`,
      providesTags: (result, error, id) => [{ type: 'Video', id }]
    }),
    addVideo: builder.mutation<string, void>({
      query: () => ({
        url: '/video',
        method: 'POST'
      }),
      invalidatesTags: () => [{ type: 'Profile' }]
    }),
    updateVideo: builder.mutation<IVideo, IVideoDto>({
      query: ({ id, ...body }) => ({
        url: `/video/${id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Video', id },
        { type: 'Profile' }
      ]
    }),
    updateViews: builder.mutation<IVideo, number>({
      query: id => ({
        url: `/video/update-views/${id}`,
        method: 'PUT'
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Video', id }]
    }),
    deleteVideo: builder.mutation<void, number>({
      query: id => ({
        url: `/video/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Video' },
        { type: 'Profile' }
      ]
    })
  })
})
