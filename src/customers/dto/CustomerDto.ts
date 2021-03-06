import { ApiProperty } from "@nestjs/swagger";
import { addressDto } from "src/addresses/dto/address.dto";
import { CreateAddressDto } from "src/addresses/dto/create-address.dto";

export class CustomerDto{
    
  @ApiProperty()
  id: number;

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
  password: string;

  @ApiProperty()
  telephone: string;

  @ApiProperty()
  companyName: string;
  
  @ApiProperty({type:[addressDto]})
  addresses: addressDto[];

  created!: Date;

  updated!: Date;

  deletedAt?: Date;
}
