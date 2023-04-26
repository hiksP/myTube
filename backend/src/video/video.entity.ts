import { CommentEntity } from 'src/comment/comment.entity'
import { LikeEntity } from 'src/like/like.entity'
import { UserEntity } from 'src/user/user.entity'
import { Base } from 'src/utils/base'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm'

@Entity('Video')
export class VideoEntity extends Base {
  @Column()
  name: string

  @Column({ default: false, name: 'is_public' })
  isPublic: boolean

  @Column({ default: 0 })
  views: number

  @Column({ default: 0 })
  duration: number

  @Column({ default: '', name: 'video_path' })
  videoPath: string

  @Column()
  description: string

  @Column({ default: '', name: 'thumbnail_path' })
  thumbnailPath: string

  @ManyToOne(() => UserEntity, user => user.videos)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity

  @OneToMany(() => LikeEntity, like => like.video)
  likes: LikeEntity[]

  @OneToMany(() => CommentEntity, comment => comment.video)
  comments: CommentEntity[]
}
