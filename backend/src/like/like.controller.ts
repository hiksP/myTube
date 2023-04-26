import {
  Controller,
  Post,
  Delete,
  Param,
  NotFoundException,
  Get
} from '@nestjs/common'
import { LikeService } from './like.service'
import { Auth } from 'src/decorators/auth.decorator'

@Controller('likes')
export class LikeController {
  constructor(private likeService: LikeService) {}

  @Post(':videoId/:userId')
  @Auth()
  async create(
    @Param('userId') userId: number,
    @Param('videoId') videoId: number
  ) {
    return await this.likeService.createLike(userId, videoId)
  }

  @Get(':videoId')
  async getLikes(@Param('videoId') videoId: number) {
    const likes = this.likeService.getLikes(videoId)
    if (!likes) {
      return 0
    }
    return likes
  }
}
