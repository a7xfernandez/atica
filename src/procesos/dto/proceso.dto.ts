import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProcesoDto } from './create-proceso.dto';

export class ProcesoDto extends PartialType(CreateProcesoDto){
    @ApiProperty()
    id: number;
}