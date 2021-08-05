import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AccountsCredentialsService } from './services/accounts-credentials.service';
import { CreateAccountsCredentialDto } from './dto/create-accounts-credential.dto';
import { UpdateAccountsCredentialDto } from './dto/update-accounts-credential.dto';
import { AcctionResponseDto } from 'src/common/dto/acction-response.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AccountsCredentialDto } from './dto/accounts-credential.dto';

@ApiTags('accounts-credentials')
@Controller('accounts-credentials')
export class AccountsCredentialsController {
  constructor(
    private readonly accountsCredentialsService: AccountsCredentialsService,
  ) {}

  @ApiBody({ type: CreateAccountsCredentialDto })
  @ApiResponse({
    status: 200,
    type: AccountsCredentialDto,
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createAccountsCredentialDto: CreateAccountsCredentialDto) {
    return this.accountsCredentialsService.create(createAccountsCredentialDto);
  }

  @ApiResponse({
    status: 200,
    type: AcctionResponseDto,
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsCredentialsService.remove(+id);
  }
}
