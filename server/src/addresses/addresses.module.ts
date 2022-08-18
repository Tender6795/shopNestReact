import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Address } from './entities/address.entity';
import { User } from 'src/user/entities/user.entity';
import { UserAddresses } from 'src/user/entities/user-address.entity';

@Module({
  controllers: [AddressesController],
  providers: [AddressesService],
  imports: [
    SequelizeModule.forFeature([Address, User, UserAddresses])
  ]
})
export class AddressesModule {}
