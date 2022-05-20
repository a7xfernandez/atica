import { PartialType } from '@nestjs/swagger';
import { CreateMedidoreDto } from './create-medidore.dto';

export class UpdateMedidoreDto extends PartialType(CreateMedidoreDto) {}
