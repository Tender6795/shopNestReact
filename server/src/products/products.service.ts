import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ImagesService } from 'src/images/images.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel(Product) 
    private productsRepositoy: typeof Product,
    private imageService: ImagesService
  ) { }

  async create(createProductDto: CreateProductDto) {
    try {
      const product = await this.productsRepositoy.create(createProductDto)
      return product
    } catch (error) {
      throw new HttpException(error.errors, HttpStatus.BAD_REQUEST)
    }
  }

  async findAll() {
    const product = await this.productsRepositoy.findAll()
    return product
  }

  async findOne(id: number) {
    const product = await this.productsRepositoy.findByPk(id)
    if (!product) throw new HttpException('Product not found', HttpStatus.NOT_FOUND)
    return product
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepositoy.findByPk(id)
    if (!product) throw new HttpException('Porduct not found', HttpStatus.NOT_FOUND)
    const isModified = await product.update(updateProductDto)
    if (!isModified) throw new HttpException('Porduct not modified', HttpStatus.NOT_MODIFIED)
    return product
  }

  async remove(id: number) {
    const isDelete = await this.productsRepositoy.destroy({ where: { id } })
    if (!isDelete) throw new HttpException('Product not delete', HttpStatus.NOT_FOUND)
    return isDelete
  }

  async addImages(id: string, images: any) {
    const newImage = await this.imageService.create(+id, images)
    return newImage
  }
}
