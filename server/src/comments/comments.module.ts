import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from './entities/comment.entity';
import { UserModule } from 'src/user/user.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [
    SequelizeModule.forFeature([Comment]),
    UserModule,
    ProductsModule
  ]
})
export class CommentsModule {}
