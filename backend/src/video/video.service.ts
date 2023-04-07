import { Injectable, NotFoundException } from '@nestjs/common'
import { VideoEntity } from './video.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { FindOptionsWhereProperty, ILike, MoreThan, Repository } from 'typeorm'
import { VideoDto } from './video.dto'

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(VideoEntity)
    private readonly videoRepository: Repository<VideoEntity>
  ) {}

  async byId(id: number, isPublic = false) {
    const video = await this.videoRepository.findOne({
      where: isPublic
        ? {
            id,
            isPublic: true
          }
        : {
            id
          },
      relations: {
        user: true,
        comments: {
          user: true
        }
      },
      select: {
        user: {
          id: true,
          name: true,
          avatarPath: true,
          isVerified: true,
          subscribersCount: true,
          subscriptions: true
        },
        comments: {
          message: true,
          id: true,
          user: {
            id: true,
            name: true,
            avatarPath: true,
            isVerified: true,
            subscribersCount: true
          }
        }
      }
    })
    if (!video) throw new NotFoundException('Нет такого видео!')
    return video
  }

  async updateVideo(id: number, dto: VideoDto) {
    const video = await this.byId(id)

    return this.videoRepository.save({
      ...video,
      ...dto
    })
  }

  async getAll(searchName?: string) {
    let options: FindOptionsWhereProperty<VideoEntity> = {}

    if (searchName) {
      options = {
        name: ILike(`%${searchName}%`)
      }
    }

    return this.videoRepository.find({
      where: {
        ...options,
        isPublic: true
      },
      order: {
        createdAt: 'DESC'
      },
      relations: {
        user: true,
        comments: {
          user: true
        }
      },
      select: {
        user: {
          id: true,
          name: true,
          avatarPath: true,
          isVerified: true
        }
      }
    })
  }

  async getTrends() {
    return this.videoRepository.find({
      where: {
        views: MoreThan(0),
        isPublic: true
      },
      relations: {
        user: true,
        comments: {
          user: true
        }
      },
      select: {
        user: {
          id: true,
          name: true,
          avatarPath: true,
          isVerified: true
        }
      },
      order: {
        views: -1
      }
    })
  }

  async createVideo(userId: number) {
    const emptyVideo = {
      name: '',
      user: { id: userId },
      videoPath: '',
      description: '',
      thumbnailPath: ''
    }

    const newVideo = this.videoRepository.create(emptyVideo)
    const video = await this.videoRepository.save(newVideo)
    return video.id
  }

  async deleteVideo(id: number) {
    return this.videoRepository.delete({ id })
  }

  async updateVideoViews(id: number) {
    const video = await this.byId(id)
    video.views++
    return this.videoRepository.save(video)
  }

  async updateVideoLikes(id: number) {
    const video = await this.byId(id)
    video.likes++
    return this.videoRepository.save(video)
  }
}
