import { PartialType } from '@nestjs/swagger';
import { CreateShippingTypeDto } from './create-shipping-type.dto';

export class UpdateShippingTypeDto extends PartialType(CreateShippingTypeDto) {}
