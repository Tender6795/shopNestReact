import { ApiProperty } from '@nestjs/swagger';
import { Model, Table, Column, DataType, BelongsToMany, HasMany } from 'sequelize-typescript'

interface UserCreationAttrs {
    email: string;
    password: string;
}
//first_name varchar [not null]
// last_name varchar [not null]
// patronymic varchar 
// avatar varchar
// county varchar //-
// city varchar //-
// adress varchar  //-
// email varchar  [not null, unique]
// password varchar [not null]
@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example:'1', description:'Unique id'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example:'user@gmail.com', description:'Unique email'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({example:'dsdsfsdfsd', description:'password'})
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({example:'first name', description:'first name'})
    @Column({ type: DataType.STRING })
    firstName: string;

    @ApiProperty({example:'last name', description:'last name'})
    @Column({ type: DataType.STRING })
    lastName: string;

    @ApiProperty({example:'patronymic', description:'patronymic'})
    @Column({ type: DataType.STRING })
    patronymic: string;

    @ApiProperty({example:'https://www.meme-arsenal.com/memes/5c4c0337787934ae05d4c5093db3fbfa.jpg', description:'path to avatar'})
    @Column({ type: DataType.STRING })
    avatar: string;
}
