import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { Image } from 'src/images/entities/image.entity';
import { ImagesService } from 'src/images/images.service';
import { ImagesModule } from 'src/images/images.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Product , Image]),
    ImagesModule
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule { }
