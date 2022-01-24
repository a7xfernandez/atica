import { ApiProperty } from "@nestjs/swagger";

export class CreateAddressTypeDto {
    @ApiProperty()
    description: string;  
}
