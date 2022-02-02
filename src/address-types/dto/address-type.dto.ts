import { ApiProperty } from "@nestjs/swagger";

export class AddressTypeDto{
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    description: string;
   
    created!: Date;
    updated!: Date;
    deletedAt?: Date;

}