import { IsEmail, IsNotEmpty, MaxLength, MinLength,IsEmpty } from 'class-validator';

export class CreateUserDto {
    username: string;
    email: string;
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(32)
    password: string;
}