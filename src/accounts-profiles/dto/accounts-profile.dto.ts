import { ApiProperty } from '@nestjs/swagger';
import { AccountDto } from './../../accounts/dto/account.dto';

export class AccountsProfileDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  profile: object;
  @ApiProperty()
  account: AccountDto;
  @ApiProperty()
  isActive: string;
  @ApiProperty()
  created!: Date;
  @ApiProperty()
  updated!: Date;
  @ApiProperty()
  deletedAt?: Date;
}
