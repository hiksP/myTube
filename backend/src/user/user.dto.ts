import { IsEmail, IsString, MinLength, isString } from 'class-validator'

export class userDto {
  @IsEmail()
  email: string

  password?: string

  @IsString()
  name: string

  @IsString()
  description: string

  @IsString()
  avatarPath: string
}
