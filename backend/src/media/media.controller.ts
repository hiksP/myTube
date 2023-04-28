import {
  Controller,
  HttpCode,
  Post,
  Query,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import { MediaService } from './media.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { Auth } from 'src/decorators/auth.decorator'

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @HttpCode(200)
  @Post()
  @UseInterceptors(FileInterceptor('media'))
  async uploadFile(
    @UploadedFile() mediaFile: Express.Multer.File,
    @Query('folder') folder?: string
  ) {
    console.log(folder)
    console.log(mediaFile)
    return this.mediaService.saveMedia(mediaFile, folder)
  }
}
