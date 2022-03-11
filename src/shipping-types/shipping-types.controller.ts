import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShippingTypesService } from './shipping-types.service';
import { CreateShippingTypeDto } from './dto/create-shipping-type.dto';
import { UpdateShippingTypeDto } from './dto/update-shipping-type.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('shipping-types')
@Controller('shipping-types')
export class ShippingTypesController {
  constructor(private readonly shippingTypesService: ShippingTypesService) {}

  @Post()
  create(@Body() createShippingTypeDto: CreateShippingTypeDto) {
    return this.shippingTypesService.create(createShippingTypeDto);
  }

  @Get()
  findAll() {
    return this.shippingTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shippingTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShippingTypeDto: UpdateShippingTypeDto) {
    return this.shippingTypesService.update(+id, updateShippingTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shippingTypesService.remove(+id);
  }
}
