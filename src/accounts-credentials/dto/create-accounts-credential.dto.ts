import { AccountDto } from "src/accounts/dto/account.dto";
import { Account } from "src/accounts/entities/account.entity";

export class CreateAccountsCredentialDto {
  credential: string;
  account: AccountDto;
  isActive: boolean;
}
