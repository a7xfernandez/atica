import { PartialType } from '@nestjs/swagger';
import { CreateEmbarcationDto } from './create-embarcation.dto';

export class UpdateEmbarcationDto extends PartialType(CreateEmbarcationDto) {}
