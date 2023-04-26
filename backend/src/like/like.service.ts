import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { LikeEntity } from './like.entity'
import { UserEntity } from 'src/user/user.entity'
import { VideoEntity } from 'src/video/video.entity'

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(LikeEntity)
    private readonly likeRepository: Repository<LikeEntity>
  ) {}

  async createLike(userId: number, videoId: number) {
    const isAlreadyLiked = await this.likeRepository.findOne({
      where: {
        user: { id: userId },
        isLiked: true,
        video: { id: videoId }
      }
    })

    if (isAlreadyLiked) {
      return this.likeRepository.delete(Number(isAlreadyLiked.id))
    }

    const like = new LikeEntity()
    like.isLiked = true

    const user = new UserEntity()
    user.id = userId
    like.user = user

    const video = new VideoEntity()
    video.id = videoId
    like.video = video

    return this.likeRepository.save(like)
  }

  async getLikes(videoId: number) {
    const allLikes = await this.likeRepository.findAndCount({
      where: {
        video: { id: videoId }
      }
    })
    return allLikes
  }
}
