import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePeceraDto } from './create-pecera.dto';


export class PeceraDto extends PartialType(CreatePeceraDto){
    @ApiProperty()
    id:number;
}