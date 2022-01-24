import { PartialType } from '@nestjs/swagger';
import { CreateShipmentAddressDto } from './create-shipment-address.dto';

export class UpdateShipmentAddressDto extends PartialType(CreateShipmentAddressDto) {}
