import { ApiProperty } from "@nestjs/swagger";
import { addressTypeDto } from "src/address-types/dto/address-type.dto";

export class addressDto {
    @ApiProperty()
    id:number;

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
    addressType: addressTypeDto;
    
    created!: Date; 
    
    updated!: Date; 
    
    deletedAt?: Date;
}
