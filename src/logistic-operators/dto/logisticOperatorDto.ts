import { ApiProperty } from "@nestjs/swagger";

export class logisticOperatorDto{
    @ApiProperty()
    id: number;    
    @ApiProperty()
    Name: string;

    @ApiProperty()
    Country: string;

    @ApiProperty()
    ZipCode: string;

    @ApiProperty()
    City: string;

    @ApiProperty()
    Street: string;

    @ApiProperty()
    Suite: string;

    @ApiProperty()
    ContactNumber: string;  

    created!: Date;
  
    updated!: Date;
  
    deletedAt?: Date;  
}