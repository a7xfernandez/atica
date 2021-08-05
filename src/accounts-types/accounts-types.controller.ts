import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AccountsTypesService } from './services/accounts-types.service';
import { CreateAccountsTypeDto } from './dto/create-accounts-type.dto';
import { UpdateAccountsTypeDto } from './dto/update-accounts-type.dto';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('accounts-types')
@Controller('accounts-types')
export class AccountsTypesController {
  constructor(private readonly accountsTypesService: AccountsTypesService) {}

  @ApiBody({})
  @ApiResponse({
    status: 200,
    type: CreateAccountsTypeDto,
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.accountsTypesService.findAll();
  }

  @ApiBody({})
  @ApiResponse({
    status: 200,
    type: CreateAccountsTypeDto,
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsTypesService.findOne(+id);
  }
}
