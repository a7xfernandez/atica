import { ApiProperty } from "@nestjs/swagger";

export class orderDetailDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    itemsCant: number;
    @ApiProperty()
    description: string;
    @ApiProperty()
    price: number;
    @ApiProperty()
    discount: number;
    @ApiProperty()
    taxes: number;
    @ApiProperty()
    subtotal: number;
}