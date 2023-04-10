import { IMenuItem } from '../../../types/menuItem.interface'
import {
  HiOutlineChartBar,
  HiOutlineCollection,
  HiOutlineHome,
  HiOutlineUserCircle
} from 'react-icons/hi'

export const menuItems: IMenuItem[] = [
  {
    title: 'Главная',
    icon: HiOutlineHome,
    link: '/'
  },
  {
    title: 'Тренды',
    icon: HiOutlineChartBar,
    link: '/trends'
  },
  {
    title: 'Мой канал',
    icon: HiOutlineUserCircle,
    link: '/my-channel'
  },
  {
    title: 'Мои подписки',
    icon: HiOutlineCollection,
    link: '/subscriptions'
  }
]
