import { PartialType } from '@nestjs/swagger';
import { CreateAccountsTypeDto } from './create-accounts-type.dto';

export class UpdateAccountsTypeDto extends PartialType(CreateAccountsTypeDto) {}
