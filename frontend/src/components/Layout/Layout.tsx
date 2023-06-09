import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.layout}>
        <Sidebar></Sidebar>
        <Header></Header>
        <div className={styles.wrapper}>{children}</div>
      </main>
    </>
  )
}

export default Layout
