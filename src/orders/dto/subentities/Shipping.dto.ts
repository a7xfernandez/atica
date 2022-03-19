import { ApiProperty } from "@nestjs/swagger";

export class ShippingDto{
    @ApiProperty()
    shippingType: number;

    @ApiProperty()
    serviceType: number;

    @ApiProperty()
    packageType: number;

    @ApiProperty()
    packageCant: number;

    @ApiProperty()
    packageContent: string;

    @ApiProperty()
    packageDimensions: string;

    @ApiProperty()
    packageweigth:number;

    @ApiProperty()
    value:number;

    @ApiProperty()
    serviceCost:number;

    @ApiProperty()
    marineInsurance:number;
}