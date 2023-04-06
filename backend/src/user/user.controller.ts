import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from 'src/decorators/auth.decorator'
import { CurrentUser } from './user.decorator'
import { AuthDto } from 'src/auth/auth.dto'
import { userDto } from './user.dto'
import { channel } from 'diagnostics_channel'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/profile')
  @Auth()
  async getProfile(@CurrentUser('id') id: number) {
    return this.userService.byId(id)
  }

  @Get('/by-id/:id')
  async getUser(@Param('id') id: string) {
    return this.userService.byId(+id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('/:id')
  @Auth()
  async patchUser(@Param('id') id: string, @Body() dto: userDto) {
    return this.userService.patchUser(+id, dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Patch('/subscribe/:channelId')
  @Auth()
  async SubscribeToChannel(
    @CurrentUser('id') id: number,
    @Param('channelId') channelId: string
  ) {
    return this.userService.subscribe(id, +channelId)
  }

  @Get()
  async getUsers() {
    return this.userService.getAll()
  }
}
