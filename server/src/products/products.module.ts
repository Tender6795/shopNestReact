import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports:[
    SequelizeModule.forFeature([Product])
  ]
})
export class ProductsModule {}
