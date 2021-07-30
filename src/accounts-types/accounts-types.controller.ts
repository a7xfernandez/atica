import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountsTypesService } from './services/accounts-types.service';
import { CreateAccountsTypeDto } from './dto/create-accounts-type.dto';
import { UpdateAccountsTypeDto } from './dto/update-accounts-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('accounts-types')
@Controller('accounts-types')
export class AccountsTypesController {
  constructor(private readonly accountsTypesService: AccountsTypesService) {}

  @Get()
  findAll() {
    return this.accountsTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsTypesService.findOne(+id);
  }
}
