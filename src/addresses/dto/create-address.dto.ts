import { ApiProperty } from "@nestjs/swagger";
import { AddressTypeDto } from "src/address-types/dto/address-type.dto";

export class CreateAddressDto {

    @ApiProperty()
    contactName: string;

    @ApiProperty()
    phoneNumber1: string;

    @ApiProperty()
    phoneNumber2: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    street: string;

    @ApiProperty()
    city: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    zipCode: string;    

    @ApiProperty()
    country: string;

    @ApiProperty()
    addressType: AddressTypeDto;
}
