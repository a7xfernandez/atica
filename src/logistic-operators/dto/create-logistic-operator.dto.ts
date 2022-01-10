import { ApiProperty } from "@nestjs/swagger";

export class CreateLogisticOperatorDto {
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
}
