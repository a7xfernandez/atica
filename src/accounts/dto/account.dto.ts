import { ApiProperty } from '@nestjs/swagger';
import { addressDto } from 'src/addresses/dto/address.dto';
import { AccountsTypeDto } from './../../accounts-types/dto/accounts-type.dto';

export class AccountDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  middleName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  telephone: string;

  @ApiProperty()
  companyName: string;

  @ApiProperty()
  accountType: AccountsTypeDto;

  @ApiProperty({type: [addressDto]})
  addresses: addressDto[];

  created!: Date;
  updated!: Date;
  deletedAt?: Date;
}
