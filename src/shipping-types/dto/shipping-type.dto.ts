import { ApiProperty } from "@nestjs/swagger";

export class shippingTypeDto{
    @ApiProperty()
    id: number;

    @ApiProperty()
    description: string;
}