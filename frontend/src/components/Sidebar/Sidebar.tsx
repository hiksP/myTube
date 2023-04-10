import { FC } from 'react'
import styles from './Sidebar.module.scss'
import Image from 'next/image'
import logoHeader from '../../assets/logoHeader.png'
import { menuItems } from '../ui/Menu/menu.data'
import Menu from '../ui/Menu/Menu'

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <Image
          src={logoHeader}
          className={styles.logo}
          width={45}
          height={45}
          alt='logo'
        />
        <h1 className={styles.title}>MyTube</h1>
      </div>
      <nav className={styles.navigation}>
        <Menu items={menuItems} title='Меню'></Menu>
      </nav>
    </div>
  )
}

export default Sidebar
