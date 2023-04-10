import { FC } from 'react'
import styles from './Menu.module.scss'
import { IMenuItem } from '../../../types/menuItem.interface'
import MenuItem from '../MenuItem/MenuItem'

const Menu: FC<{ items: IMenuItem[]; title: string }> = ({ items, title }) => {
  return (
    <>
      <ul className={styles.menu}>
        <h2 className={styles.title}>{title}</h2>
        {items.map(item => (
          <MenuItem item={item} key={item.link}></MenuItem>
        ))}
      </ul>
    </>
  )
}

export default Menu
