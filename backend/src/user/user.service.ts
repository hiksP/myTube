import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { UserEntity } from './user.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { SubscriptionEntity } from './subscription.entity'
import { userDto } from './user.dto'
import { genSalt, hash } from 'bcryptjs'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(SubscriptionEntity)
    private readonly subsciptionRepository: Repository<SubscriptionEntity>
  ) {}

  async byId(id: number) {
    const user = await this.userRepository.findOne({
      where: {
        id
      },
      relations: {
        videos: true,
        subscriptions: {
          toChanel: true
        }
      },
      order: {
        createdAt: 'DESC'
      }
    })
    if (!user) throw new NotFoundException('Пользователь не найден')
    return user
  }

  async patchUser(id: number, dto: userDto) {
    const user = await this.byId(id)
    const isUserSame = await this.userRepository.findOneBy({ email: dto.email })
    if (isUserSame && id !== isUserSame.id)
      throw new BadRequestException('Данный email уже занят')
    if (dto.password) {
      const salt = await genSalt(5)
      user.password = await hash(dto.password, salt)
    }

    user.email = dto.email
    user.name = dto.name
    user.description = dto.description
    user.avatarPath = dto.avatarPath

    return this.userRepository.save(user)
  }

  async subscribe(id: number, channelId: number) {
    const userSubscription = {
      toChannel: { id: channelId },
      fromUser: { id }
    }

    const isSubscribed = await this.subsciptionRepository.findOneBy(
      userSubscription
    )

    if (!isSubscribed) {
      const newSubscribe = await this.subsciptionRepository.create(
        userSubscription
      )
      await this.subsciptionRepository.save(newSubscribe)
      return true
    }
    await this.subsciptionRepository.delete(userSubscription)
    return false
  }

  async getAll() {
    return this.userRepository.find()
  }
}
