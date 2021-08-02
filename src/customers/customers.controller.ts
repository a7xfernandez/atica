import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomersService } from './services/customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }
  
  @Get('/:page/:limit')
  findAll(
    @Res() res,
    @Param('limit') limit: number,
    @Param('page') page: number,
  ) {
    let take = limit;
    let skip = (page - 1) * limit;
    return this.customersService.findAll(skip, take);
  }
}
