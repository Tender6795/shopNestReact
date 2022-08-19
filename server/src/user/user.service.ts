import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto)
    return user
  }

  async findAll() {
    const users = await this.userRepository.findAll({ include: { all: true } })
    return users
  }

  async findOneById(id: number) {
    const user = await this.userRepository.findByPk(id)
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    return user
  }

  async findOneByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } })
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    return user
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findByPk(id)
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    const isModified = await user.update(updateUserDto)
    if(!isModified) throw new HttpException('User not modified', HttpStatus.NOT_MODIFIED)
    return user
  }

  async remove(id: number) {
    const isDelete = await this.userRepository.destroy({ where: { id } })
    if (!isDelete) throw new HttpException('User not delete', HttpStatus.NOT_FOUND)
    return isDelete
  }
}
