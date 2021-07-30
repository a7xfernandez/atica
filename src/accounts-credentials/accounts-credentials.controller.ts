import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AccountsCredentialsService } from './services/accounts-credentials.service';
import { CreateAccountsCredentialDto } from './dto/create-accounts-credential.dto';
import { UpdateAccountsCredentialDto } from './dto/update-accounts-credential.dto';

@ApiTags('accounts-credentials')
@Controller('accounts-credentials')
export class AccountsCredentialsController {
  constructor(
    private readonly accountsCredentialsService: AccountsCredentialsService,
  ) {}

  @Post()
  create(@Body() createAccountsCredentialDto: CreateAccountsCredentialDto) {
    return this.accountsCredentialsService.create(createAccountsCredentialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsCredentialsService.remove(+id);
  }

}
