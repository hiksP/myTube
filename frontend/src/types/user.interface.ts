import { IBase } from './base.interface'
import { IVideo } from './video.interface'

export interface IUser extends IBase {
  email: string
  name: string
  isVerified?: boolean
  subscribersCount: string
  description: string
  avatarPath: string
  videos?: IVideo[]
  subscriptions: ISubscriptions[]
}

export interface ISubscriptions extends IBase {
  toChannel: IUser
}
