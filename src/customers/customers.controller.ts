import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { CustomersService } from './services/customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { AccountDto } from 'src/accounts/dto/account.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CustomerDto } from './dto/CustomerDto';
import { customerPaginatedDto } from './dto/customer-paginated-dto';
import { get } from 'http';
import { AcctionResponseDto } from 'src/common/dto/acction-response.dto';
import { UpdatePasswordDto } from 'src/auth/dto/update-password.dto';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @ApiBody({ type: CreateCustomerDto })
  @ApiResponse({
    status: 200,
    type: AccountDto,
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @ApiResponse({
    status: 200,
    type: customerPaginatedDto,
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Get('/:page/:limit')
  findAll(@Param('limit') limit: number, @Param('page') page: number) {
    let take = limit;
    let skip = (page - 1) * limit;
    return this.customersService.findAll(skip, take);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string){
    return this.customersService.findOne(+id);
  }
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Put(':customerId')
  update(@Param('customerId') customerId: number, @Body() updateCustomerDto: UpdateCustomerDto){
    return this.customersService.update(+customerId,updateCustomerDto);
  }

  @ApiResponse({
    status: 200,
    type: AcctionResponseDto,
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Delete(':customerId')
  remove(@Param('customerId') customerId: number){
    return this.customersService.remove(customerId);
  }

  @ApiResponse({
    status: 204,
    type: AcctionResponseDto,
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Patch('/updatePassword')
  updatePassword(@Body() updatePasswordDto: UpdatePasswordDto)
  {
    return this.customersService.updatePassWord(updatePasswordDto.username,updatePasswordDto.oldPassword,updatePasswordDto.newPassword);
  }
}