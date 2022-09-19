import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { Attribute } from './entities/attribute.entity';

@Injectable()
export class AttributesService {
  constructor(
    @InjectModel(Attribute)
    private attributesRepositiry: typeof Attribute 
  ){}

 async create(createAttributeDto: CreateAttributeDto) {
    try {
      const attribute = await this.attributesRepositiry.create(createAttributeDto)
      return attribute
    } catch (error) {
      throw new HttpException(error.errors, HttpStatus.BAD_REQUEST)
    }
  }

 async findAll() {
    return await this.attributesRepositiry.findAll()
  }

  async findOne(id: number) {
    const attribute = await this.attributesRepositiry.findByPk(id)
    if (!attribute) throw new HttpException('Attribute not found', HttpStatus.NOT_FOUND)
    return attribute
  }

  async update(id: number, updateAttributeDto: UpdateAttributeDto) {
    const attribute = await this.attributesRepositiry.findByPk(id)
    if (!attribute) throw new HttpException('Attribute not found', HttpStatus.NOT_FOUND)
    const isModified = await attribute.update(updateAttributeDto)
    if (!isModified) throw new HttpException('Attribute not modified', HttpStatus.NOT_MODIFIED)
    return attribute
  }

  async remove(id: number) {
    const isDelete = await this.attributesRepositiry.destroy({ where: { id } })
    if (!isDelete) throw new HttpException('Attribute not delete', HttpStatus.NOT_MODIFIED)
    return isDelete
  }
}
