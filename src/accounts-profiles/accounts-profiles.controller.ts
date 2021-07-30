import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AccountsProfilesService } from './services/accounts-profiles.service';
import { CreateAccountsProfileDto } from './dto/create-accounts-profile.dto';
import { UpdateAccountsProfileDto } from './dto/update-accounts-profile.dto';

@ApiTags('accounts-profiles')
@Controller('accounts-profiles')
export class AccountsProfilesController {
  constructor(
    private readonly accountsProfilesService: AccountsProfilesService,
  ) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsProfilesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountsProfileDto: UpdateAccountsProfileDto,
  ) {
    return this.accountsProfilesService.update(+id, updateAccountsProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsProfilesService.remove(+id);
  }
}
