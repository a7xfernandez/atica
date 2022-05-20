import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateMedidoreDto } from "./create-medidore.dto";


export class MedidoreDto extends PartialType(CreateMedidoreDto){
    @ApiProperty()
    id: number;
}