import { FC } from 'react'
import styles from './SearchBar.module.scss'
import Image from 'next/image'
import searchPic from '../../assets/Style=Linear.svg'

const SearchBar: FC = () => {
  return (
    <div className={styles.searchBar}>
      <Image
        className={styles.searchPic}
        src={searchPic}
        alt='search'
        width={24}
        height={24}
      />
      <input className={styles.input} placeholder='Название видео'></input>
    </div>
  )
}

export default SearchBar
