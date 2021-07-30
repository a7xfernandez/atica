import { AccountDto } from './../../accounts/dto/account.dto';

export class AccountsProfileDto {
  id: number;
  profile: object;
  account: AccountDto;
  isActive: string;
  created!: Date;
  updated!: Date;
  deletedAt?: Date;
}
