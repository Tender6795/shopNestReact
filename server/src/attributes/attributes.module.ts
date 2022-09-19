import { forwardRef, Module } from '@nestjs/common';
import { AttributesService } from './attributes.service';
import { AttributesController } from './attributes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Attribute } from './entities/attribute.entity';
import { Product } from 'src/products/entities/product.entity';
import { ProductAttributes } from './entities/product-attributes';

@Module({
  controllers: [AttributesController],
  providers: [AttributesService],
  imports: [
    SequelizeModule.forFeature([Attribute, Product, ProductAttributes]),
  ],
  exports: [
    AttributesService
  ]
})
export class AttributesModule {}
