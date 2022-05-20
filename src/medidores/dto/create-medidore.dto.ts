import { ApiProperty } from "@nestjs/swagger";
import { PeceraDto } from "src/peceras/dto/pecera.dto";

export class CreateMedidoreDto {
    @ApiProperty({type:PeceraDto})
    pecera: PeceraDto;

    @ApiProperty()
    apiKey: string;
}
