import { FC } from 'react'
import styles from './Sidebar.module.scss'
import Image from 'next/image'
import logoHeader from '../../assets/logoHeader.png'
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
      <h2 className={styles.menuTitle}>Меню</h2>
      <nav className={styles.navigation}>
        <Menu></Menu>
      </nav>
    </div>
  )
}

export default Sidebar
