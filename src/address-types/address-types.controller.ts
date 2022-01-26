import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddressTypesService } from './address-types.service';
import { CreateAddressTypeDto } from './dto/create-address-type.dto';
import { UpdateAddressTypeDto } from './dto/update-address-type.dto';

@ApiTags('address-types')
@Controller('address-types')
export class AddressTypesController {
  constructor(private readonly addressTypesService: AddressTypesService) {}

  @Post()
  create(@Body() createAddressTypeDto: CreateAddressTypeDto) {
    return this.addressTypesService.create(createAddressTypeDto);
  }

  @Get()
  findAll() {
    return this.addressTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressTypeDto: UpdateAddressTypeDto) {
    return this.addressTypesService.update(+id, updateAddressTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressTypesService.remove(+id);
  }
}
