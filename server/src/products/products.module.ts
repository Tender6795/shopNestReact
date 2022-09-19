import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { Image } from 'src/images/entities/image.entity';
import { ImagesService } from 'src/images/images.service';
import { ImagesModule } from 'src/images/images.module';
import { Attribute } from 'src/attributes/entities/attribute.entity';
import { ProductAttributes } from 'src/attributes/entities/product-attributes';
import { AttributesModule } from 'src/attributes/attributes.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Product , Image, Attribute, ProductAttributes]),
    ImagesModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule { }
