import { ApiProperty } from "@nestjs/swagger";
import { FincaDto } from "src/fincas/dto/finca.dto";

export class CreateProcesoDto {
    @ApiProperty({type:FincaDto})
    finca:FincaDto;
}
