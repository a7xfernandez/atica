import { ApiProperty } from "@nestjs/swagger";
export class CreateShipmentAddressDto {   
    
    @ApiProperty()
    customerId:number;    

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
}