import { PartialType } from '@nestjs/swagger';
import { addressDto } from './address.dto';

export class UpdateAddressDto extends PartialType(addressDto) {}
