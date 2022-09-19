import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";


interface CommentCreateAttr {
    message: string;
    productId: number;
    userId: number;
}

@Table({ tableName: 'comments' })
export class Comment extends Model<Comment, CommentCreateAttr> {
    @ApiProperty({ example: '1', description: 'Unique id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'good product', description: 'Comment' })
    @Column({ type: DataType.STRING, allowNull: false })
    message: string;

    @ApiProperty({ example: '1', description: 'Product id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    productId: number;

    @ApiProperty({ example: '1', description: 'User id' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;
}
