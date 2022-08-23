import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from "path";

import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AddressesModule } from './addresses/addresses.module';
import { Address } from './addresses/entities/address.entity';
import { UserAddresses } from './user/entities/user-address.entity';
import { FilesModule } from './files/files.module';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { ImagesModule } from './images/images.module';
import { Image } from './images/entities/image.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static')
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User , Address, UserAddresses, Product, Image],
      autoLoadModels: true
    }),
    MulterModule.register({
      dest: 'dist/static/uploads',
    }),
    UserModule,
    AddressesModule,
    FilesModule,
    ProductsModule,
    ImagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
