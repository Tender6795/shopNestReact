import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User,
    private fileService: FilesService,
    private roleService: RolesService
  ) { }

  async create(createUserDto: CreateUserDto, image?: any) {
    try {
      const fileName = await this.fileService.createFile(image)
      const user = await this.userRepository.create({ ...createUserDto, avatar: fileName })
      const role = await this.roleService.getRoleByValue("USER")
      await user.$set('roles', [role.id])
      user.roles = [role]
      return user
    } catch (error) {
      throw new HttpException(error.errors, HttpStatus.BAD_REQUEST)
    }
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

  async update(id: number, updateUserDto: UpdateUserDto, image: any) {
    const user = await this.userRepository.findByPk(id)
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    const fileName = await this.fileService.createFile(image)
    const isModified = await user.update({ ...updateUserDto, avatar: fileName })
    if (!isModified) throw new HttpException('User not modified', HttpStatus.NOT_MODIFIED)
    return user
  }

  async remove(id: number) {
    const isDelete = await this.userRepository.destroy({ where: { id } })
    if (!isDelete) throw new HttpException('User not delete', HttpStatus.NOT_FOUND)
    return isDelete
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId)
    const role = await this.roleService.getRoleByValue(dto.value)
    if (user && role) {
      await user.$add('role', role.id)
      return dto
    }
    throw new HttpException('User or role not found', HttpStatus.NOT_FOUND)
  }
}
