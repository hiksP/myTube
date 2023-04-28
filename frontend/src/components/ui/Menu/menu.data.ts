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
    title: 'Студия',
    icon: HiUser,
    link: '/studio'
  },
  {
    title: 'Мои подписки',
    icon: HiCollection,
    link: '/subscriptions'
  }
]
