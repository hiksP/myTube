import { IVideo } from './video.interface'

export interface IVideoItem {
  item: IVideo
  removeHandler?: (videoId: number) => void
  isUpdateLink?: boolean
}
