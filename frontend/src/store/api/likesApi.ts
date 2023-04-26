import { api } from './api'

export const likesApi = api.injectEndpoints({
  endpoints: builder => ({
    createLike: builder.mutation({
      query: ({ userId, videoId }) => ({
        url: `likes/${videoId}/${userId}`,
        method: 'POST'
      }),
      invalidatesTags: (result, error, { videoId }) => [
        { type: 'Video', id: videoId }
      ]
    }),
    getLikesById: builder.query({
      query: id => `/likes/${id}`,
      providesTags: (result, error, id) => [{ type: 'Video', id }]
    })
  })
})
