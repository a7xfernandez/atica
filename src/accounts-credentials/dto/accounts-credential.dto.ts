import { AccountDto } from "src/accounts/dto/account.dto";
import { Account } from "src/accounts/entities/account.entity";

export class AccountsCredentialDto {
  id: number;
  account: Account;
  isActive: boolean;
  created!: Date;
  updated!: Date;
  deletedAt?: Date;
}
