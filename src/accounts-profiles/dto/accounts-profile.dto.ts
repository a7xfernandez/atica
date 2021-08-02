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

  created!: Date;

  updated!: Date;

  deletedAt?: Date;
}
