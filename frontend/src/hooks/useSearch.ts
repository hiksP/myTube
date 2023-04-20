import { ChangeEvent, useState } from 'react'
import { useDebounce } from './useDebounce'
import { videoApi } from '../store/api/videoApi'

export const useSearch = () => {
  const [searchName, setSearchName] = useState('')
  const debounceSearch = useDebounce(searchName, 300)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value)
  }

  const { data, isSuccess } = videoApi.useGetVideoBySearchNameQuery(
    debounceSearch,
    {
      skip: !debounceSearch,
      selectFromResult: ({ data, ...rest }) => ({
        data: data?.slice(0, 4),
        ...rest
      })
    }
  )

  return {
    handleSearch,
    data,
    isSuccess,
    searchName
  }
}
