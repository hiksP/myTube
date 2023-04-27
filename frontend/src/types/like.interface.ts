import { IBase } from './base.interface'

export interface ILike extends IBase {
  isLiked: true
  user: {
    id: number
  }
}

export interface ILikes {
  0: ILike[]
  1: number
}
