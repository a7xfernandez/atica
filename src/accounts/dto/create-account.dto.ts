import { ApiProperty } from "@nestjs/swagger";
import { AccountsTypeDto } from "src/accounts-types/dto/accounts-type.dto";
import { CreateAddressDto } from "src/addresses/dto/create-address.dto";

export class CreateAccountDto {

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  middleName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  telephone: string;

  @ApiProperty()
  companyName: string;
  
  accountTypeId: AccountsTypeDto;
  @ApiProperty({type: [CreateAddressDto]})
  addresses: CreateAddressDto[];

}
