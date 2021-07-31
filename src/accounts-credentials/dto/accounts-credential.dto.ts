import { ApiProperty } from "@nestjs/swagger";
import { AccountDto } from "src/accounts/dto/account.dto";
import { Account } from "src/accounts/entities/account.entity";

export class AccountsCredentialDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  account: Account;
  @ApiProperty()
  isActive: boolean;
  @ApiProperty()
  created!: Date;
  @ApiProperty()
  updated!: Date;
  @ApiProperty()
  deletedAt?: Date;
}
