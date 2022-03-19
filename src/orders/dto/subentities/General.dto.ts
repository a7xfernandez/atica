import { ApiProperty } from "@nestjs/swagger";

export class GeneralDto {
    @ApiProperty()
    company: number;
    
    @ApiProperty()
    orderDate: Date;
}