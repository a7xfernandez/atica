import { ApiProperty } from "@nestjs/swagger";

export class shipmentAddressDto {

    @ApiProperty()
    id: number;
    
    @ApiProperty()
    CustomerId:number;    

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

    created!: Date;  
    
    updated!: Date;  
    
    deletedAt?: Date;
}