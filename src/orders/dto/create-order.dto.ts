import { ApiProperty } from "@nestjs/swagger";
import { CreateOrderDetailDto } from "src/order-details/dto/create-order-detail.dto";
import { EmbarcationDataDto } from "./subentities/EmbarcationData.dto";

import { GeneralDto } from "./subentities/General.dto";
import { ShippingDto } from "./subentities/Shipping.dto";
import { ShipperDto } from "./subentities/Shippper.dto";

export class CreateOrderDto {
    @ApiProperty({type:GeneralDto})
    general: GeneralDto;

    @ApiProperty({type:ShipperDto})
    shipper:ShipperDto;

    @ApiProperty({type:ShippingDto})
    shipping: ShippingDto;

    @ApiProperty({type:EmbarcationDataDto})
    embarcation:EmbarcationDataDto;    

    @ApiProperty({type:CreateOrderDetailDto})
    orderDetail: CreateOrderDetailDto[];
}
