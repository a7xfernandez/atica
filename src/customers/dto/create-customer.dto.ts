import { ApiProperty } from "@nestjs/swagger";
import { CreateAddressDto } from "src/addresses/dto/create-address.dto";

export class CreateCustomerDto {
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

  @ApiProperty()
  password: string;
  
  @ApiProperty({type:[CreateAddressDto]})
  Addresses: CreateAddressDto[];
}
