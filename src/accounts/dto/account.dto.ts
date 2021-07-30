import { AccountsTypeDto } from './../../accounts-types/dto/accounts-type.dto';
export class AccountDto {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  accountType: AccountsTypeDto;
  created!: Date;
  updated!: Date;
  deletedAt?: Date;
}
