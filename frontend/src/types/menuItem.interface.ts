import { IconType } from 'react-icons'
import { IVideo } from './video.interface'

export interface IMenuItem {
  link: string
  title: string
  icon?: IconType
  image?: string
  videos?: IVideo[]
}
