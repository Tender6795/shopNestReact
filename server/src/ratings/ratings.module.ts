import { forwardRef, Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { Rating } from './entities/rating.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [RatingsController],
  providers: [RatingsService],
  imports: [
    SequelizeModule.forFeature([Rating]),
    forwardRef(() => AuthModule),
  ]
})
export class RatingsModule {}
