import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAccessToken {
  @IsNotEmpty()
  @ApiProperty()
  username: string;
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
