import { Module } from '@nestjs/common'
import { VideoService } from './video.service'
import { VideoController } from './video.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { VideoEntity } from './video.entity'
import { CommentEntity } from 'src/comment/comment.entity'
import { LikeEntity } from 'src/like/like.entity'

@Module({
  controllers: [VideoController],
  providers: [VideoService],
  imports: [TypeOrmModule.forFeature([VideoEntity, CommentEntity, LikeEntity])]
})
export class VideoModule {}
