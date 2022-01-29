import { PartialType } from '@nestjs/swagger';
import { CreateCustomerDto } from './create-customer.dto';
import { CustomerDto } from './CustomerDto';

export class UpdateCustomerDto extends PartialType(CustomerDto) {}
