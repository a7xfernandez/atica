import { PartialType } from '@nestjs/swagger';
import { CreateAccountsProfileDto } from './create-accounts-profile.dto';

export class UpdateAccountsProfileDto extends PartialType(CreateAccountsProfileDto) {}
