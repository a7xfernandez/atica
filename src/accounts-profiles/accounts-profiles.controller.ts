import { AccountsProfileDto } from './dto/accounts-profile.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AccountsProfilesService } from './services/accounts-profiles.service';
import { CreateAccountsProfileDto } from './dto/create-accounts-profile.dto';
import { UpdateAccountsProfileDto } from './dto/update-accounts-profile.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('accounts-profiles')
@Controller('accounts-profiles')
export class AccountsProfilesController {
  constructor(
    private readonly accountsProfilesService: AccountsProfilesService,
  ) {}

  @ApiBody({})
  @ApiResponse({
    status: 200,
    type: AccountsProfileDto,
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsProfilesService.findOne(+id);
  }

  @ApiBody({ type: UpdateAccountsProfileDto })
  @ApiResponse({
    status: 200,
    type: AccountsProfileDto,
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountsProfileDto: UpdateAccountsProfileDto,
  ) {
    return this.accountsProfilesService.update(+id, updateAccountsProfileDto);
  }

  @ApiBody({})
  @ApiResponse({
    status: 200,
    type: AccountsProfileDto,
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsProfilesService.remove(+id);
  }
}
