import { PartialType } from '@nestjs/swagger';
import { CreateAccountsCredentialDto } from './create-accounts-credential.dto';

export class UpdateAccountsCredentialDto extends PartialType(CreateAccountsCredentialDto) {}
