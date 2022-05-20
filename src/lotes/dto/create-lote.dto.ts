import { ApiProperty } from "@nestjs/swagger";
import { ProcesoDto } from "src/procesos/dto/proceso.dto";
export class CreateLoteDto {
    @ApiProperty({type:ProcesoDto})
    proceso:ProcesoDto;
}
