import { ApiProperty } from "@nestjs/swagger";
import { AccountDto } from "src/accounts/dto/account.dto";

export class CreateAccountsProfileDto {
  @ApiProperty()
  profile: object;
  @ApiProperty()
  account: AccountDto;
  @ApiProperty()
  isActive: string;
}
