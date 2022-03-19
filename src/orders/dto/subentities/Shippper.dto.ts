import { ApiProperty } from "@nestjs/swagger";

export class ShipperDto{
    
    @ApiProperty()
    customer:number;

    @ApiProperty()
    shippingAddress:number;

    @ApiProperty()
    destinationAddress: number;    
}