import { AccountsTypeDto } from "src/accounts-types/dto/accounts-type.dto";

export class CreateAccountDto {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  accountTypeId: AccountsTypeDto;
}
