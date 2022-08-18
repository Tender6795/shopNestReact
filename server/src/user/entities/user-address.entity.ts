import { Model, Table, Column, DataType, ForeignKey } from 'sequelize-typescript'
import { Address } from 'src/addresses/entities/address.entity';
import { User } from './user.entity';


@Table({ tableName: 'user_addresses', createdAt: false, updatedAt: false })
export class UserAddresses extends Model<UserAddresses> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => Address)
    @Column({ type: DataType.INTEGER })
    addressId: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;
}