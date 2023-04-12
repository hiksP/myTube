import { IMenuItem } from '../../../types/menuItem.interface'
import { HiChartBar, HiCollection, HiHome, HiUser } from 'react-icons/hi'

export const menuItems: IMenuItem[] = [
  {
    title: 'Главная',
    icon: HiHome,
    link: '/'
  },
  {
    title: 'Тренды',
    icon: HiChartBar,
    link: '/trends'
  },
  {
    title: 'Мой канал',
    icon: HiUser,
    link: '/my-channel'
  },
  {
    title: 'Мои подписки',
    icon: HiCollection,
    link: '/subscriptions'
  }
]
