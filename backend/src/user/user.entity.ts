import { Base } from 'src/utils/base'
import { VideoEntity } from 'src/video/video.entity'
import { Column, Entity, OneToMany } from 'typeorm'
import { SubscriptionEntity } from './subscription.entity'
import { LikeEntity } from 'src/like/like.entity'

@Entity('User')
export class UserEntity extends Base {
  @Column({ unique: true })
  email: string

  @Column({ select: false })
  password: string

  @Column({ default: '' })
  name: string

  @Column({ default: false, name: 'is_verified' })
  isVerified: boolean

  @Column({ default: 0, name: 'subscribers_count' })
  subscribersCount: number

  @Column({ default: '', type: 'text' })
  description: string

  @Column({ default: '', name: 'avatar_path' })
  avatarPath: string

  @OneToMany(() => VideoEntity, video => video.user)
  videos: VideoEntity[]

  @OneToMany(() => LikeEntity, like => like.user)
  likes: LikeEntity[]

  @OneToMany(() => SubscriptionEntity, subscribe => subscribe.fromUser)
  subscriptions: SubscriptionEntity[]

  @OneToMany(() => SubscriptionEntity, subscribe => subscribe.toChannel)
  subscribers: SubscriptionEntity[]
}
