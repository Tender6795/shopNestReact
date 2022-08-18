import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { Address } from 'src/addresses/entities/address.entity';
import { UserAddresses } from './entities/user-address.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User, Address, UserAddresses]),
  ],
})
export class UserModule {}
