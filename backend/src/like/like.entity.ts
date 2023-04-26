import { Entity, Column, ManyToOne } from 'typeorm'
import { UserEntity } from 'src/user/user.entity'
import { VideoEntity } from 'src/video/video.entity'
import { Base } from 'src/utils/base'

@Entity()
export class LikeEntity extends Base {
  @Column()
  isLiked: boolean

  @ManyToOne(() => UserEntity, user => user.likes)
  user: UserEntity

  @ManyToOne(() => VideoEntity, video => video.likes)
  video: VideoEntity
}
