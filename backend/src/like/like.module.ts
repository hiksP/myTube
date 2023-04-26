import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LikeController } from './like.controller'
import { LikeService } from './like.service'
import { LikeEntity } from './like.entity'

@Module({
  controllers: [LikeController],
  providers: [LikeService],
  imports: [TypeOrmModule.forFeature([LikeEntity])]
})
export class LikeModule {}
