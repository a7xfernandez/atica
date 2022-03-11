import { ApiProperty } from "@nestjs/swagger";
export class CreateShippingTypeDto {
    @ApiProperty()
    description: string;  
}
