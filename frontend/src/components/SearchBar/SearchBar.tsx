import { FC } from 'react'
import styles from './SearchBar.module.scss'
import Image from 'next/image'
import searchPic from '../../assets/Style=Linear.svg'
import { useSearch } from '../../hooks/useSearch'
import VideoItem from '../VideoItem/VideoItem'

const SearchBar: FC = () => {
  const { data, handleSearch, searchName, isSuccess } = useSearch()

  return (
    <div className={styles.searchBar}>
      <Image
        className={styles.searchPic}
        src={searchPic}
        alt='search'
        width={24}
        height={24}
      />
      <input
        value={searchName}
        onChange={handleSearch}
        className={styles.input}
        placeholder='Название видео'
      ></input>
      {isSuccess && (
        <div className={styles.videos}>
          {data?.length ? (
            data.map(video => (
              <VideoItem item={video} key={video.id}></VideoItem>
            ))
          ) : (
            <div>
              <p>Нет видео</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar
