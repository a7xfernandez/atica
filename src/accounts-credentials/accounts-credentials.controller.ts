import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AccountsCredentialsService } from './accounts-credentials.service';
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

  @Get()
  findAll() {
    return this.accountsCredentialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsCredentialsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountsCredentialDto: UpdateAccountsCredentialDto,
  ) {
    return this.accountsCredentialsService.update(
      +id,
      updateAccountsCredentialDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsCredentialsService.remove(+id);
  }
}
