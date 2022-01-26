import { ApiProperty } from "@nestjs/swagger";
import { addressDto } from "src/addresses/dto/address.dto";

import { CreateShipmentAddressDto } from "src/shipment-addresses/dto/create-shipment-address.dto";

export class externalCreateCustomerDto {
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
  Adress: addressDto;
  
  @ApiProperty({type:[CreateShipmentAddressDto]})
  shipmentAddresses: CreateShipmentAddressDto[];
}
