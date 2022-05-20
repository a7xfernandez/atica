import { PartialType } from '@nestjs/swagger';
import { CreatePeceraDto } from './create-pecera.dto';

export class UpdatePeceraDto extends PartialType(CreatePeceraDto) {}
