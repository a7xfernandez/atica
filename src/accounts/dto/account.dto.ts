import { ApiProperty } from '@nestjs/swagger';
import { AccountsTypeDto } from './../../accounts-types/dto/accounts-type.dto';

export class AccountDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  userName: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  accountType: AccountsTypeDto;

  created!: Date;
  updated!: Date;
  deletedAt?: Date;
}
