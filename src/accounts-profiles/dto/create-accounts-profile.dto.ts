import { AccountDto } from "src/accounts/dto/account.dto";

export class CreateAccountsProfileDto {
  profile: object;
  account: AccountDto;
  isActive: string;
}
