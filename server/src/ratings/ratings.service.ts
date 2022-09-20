import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRatingDto } from './dto/create-rating.dto';
import { Rating } from './entities/rating.entity';

@Injectable()
export class RatingsService {
constructor(
  @InjectModel(Rating) private ratingRepository: typeof Rating
){}

  create(createRatingDto: CreateRatingDto, userId: number) {
    return 'This action adds a new rating';
  }

  findAll() {
    return `This action returns all ratings`;
  }

  findById(id: number) {
    return `This action returns a #${id} rating`;
  }

  getProductRaiting(id: number) {
    return `This action returns a #${id} rating`;
  }
}
