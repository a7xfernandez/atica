import { ApiProperty } from "@nestjs/swagger";
import { AccountDto } from "src/accounts/dto/account.dto";
import { Account } from "src/accounts/entities/account.entity";

export class CreateAccountsCredentialDto {
  @ApiProperty()
  credential: string;
  @ApiProperty()
  account: AccountDto;
  @ApiProperty()
  isActive: boolean;
}
