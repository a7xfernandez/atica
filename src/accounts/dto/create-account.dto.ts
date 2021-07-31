import { ApiProperty } from "@nestjs/swagger";
import { AccountsTypeDto } from "src/accounts-types/dto/accounts-type.dto";

export class CreateAccountDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  userName: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  accountTypeId: AccountsTypeDto;
}
