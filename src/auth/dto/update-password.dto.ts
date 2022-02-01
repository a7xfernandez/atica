import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdatePasswordDto{
    @IsNotEmpty()
    @ApiProperty()
    username: string;
    @IsNotEmpty()
    @ApiProperty()
    oldPassword: string;
    @IsNotEmpty()
    @ApiProperty()
    newPassword: string;
}