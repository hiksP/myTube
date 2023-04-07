import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Delete,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { VideoService } from './video.service'
import { Auth } from 'src/decorators/auth.decorator'
import { CurrentUser } from 'src/user/user.decorator'
import { userDto } from 'src/user/user.dto'
import { VideoDto } from './video.dto'

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get('get-private/:id')
  @Auth()
  async getPrivateVideo(@Param('id') id: string) {
    return this.videoService.byId(+id)
  }

  @Get()
  async getAll(@Query('searchName') searchName?: string) {
    return this.videoService.getAll(searchName)
  }

  @Get('trend')
  async getMostTrendy() {
    return this.videoService.getTrends()
  }

  @Get(':id')
  async getVideo(@Param('id') id: string) {
    return this.videoService.byId(+id)
  }

  @HttpCode(200)
  @Post(':id')
  @Auth()
  async createVideo(@CurrentUser('id') id: number) {
    return this.videoService.createVideo(id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async updateVideo(@Param('id') id: string, @Body() dto: VideoDto) {
    return this.videoService.updateVideo(+id, dto)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async deleteVideo(@Param('id') id: string) {
    return this.videoService.deleteVideo(+id)
  }

  @HttpCode(200)
  @Put('update-views/:videoId')
  async updateViews(@Param('videoId') videoId: string) {
    return this.videoService.updateVideoViews(+videoId)
  }

  @HttpCode(200)
  @Put('update-likes/:videoId')
  @Auth()
  async updateLikes(@Param('videoId') videoId: string) {
    return this.videoService.updateVideoLikes(+videoId)
  }
}
