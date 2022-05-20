import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateLoteDto } from './create-lote.dto';

export class LoteDto extends PartialType(CreateLoteDto){
    @ApiProperty()
    id: number;
}