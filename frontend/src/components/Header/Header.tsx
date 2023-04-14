import { FC } from 'react'
import styles from './Header.module.scss'
import SearchBar from '../SearchBar/SearchBar'
import IconsMenu from '../IconsMenu/IconsMenu'

const Header: FC = () => {
  return (
    <section className={styles.header}>
      <SearchBar></SearchBar>
      <IconsMenu></IconsMenu>
    </section>
  )
}

export default Header
