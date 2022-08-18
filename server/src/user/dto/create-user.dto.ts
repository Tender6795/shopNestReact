import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'user@gmail.com', description: 'Unique email' })
    @IsString({ message: 'must be string' })
    @IsEmail({}, { message: 'must be email' })
    readonly email: string;

    @ApiProperty({ example: 'dsdsfsdfsd', description: 'password' })
    @IsString({ message: 'must be string' })
    @Length(4, 16, { message: 'must be 4 - 16 symbols' })
    readonly password: string;
}
