import { IVideo } from './video.interface'

export interface IHome {
  newVideos: IVideo[]
  mostPopular: IVideo
  randomVideo: IVideo
}
