import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFincaDto } from './create-finca.dto';

export class FincaDto extends PartialType(CreateFincaDto) {
    @ApiProperty()
    id: number;
}