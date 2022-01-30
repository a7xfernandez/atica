import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ShipmentAddressesService } from './shipment-addresses.service';
import { CreateShipmentAddressDto } from './dto/create-shipment-address.dto';
import { UpdateShipmentAddressDto } from './dto/update-shipment-address.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('shipment-addresses')
@Controller('shipment-addresses')
export class ShipmentAddressesController {
  constructor(private readonly shipmentAddressesService: ShipmentAddressesService) {}

  @Post()
  create(@Body() createShipmentAddressDto: CreateShipmentAddressDto) {
    return this.shipmentAddressesService.create(createShipmentAddressDto);
  }

  @Get('/:page/:limit')
  async findAll(@Param('limit') limit: number, @Param('page') page: number) {
    let take = limit;
    let skip = (page - 1) * limit;
    return this.shipmentAddressesService.findAll(skip, take);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shipmentAddressesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShipmentAddressDto: UpdateShipmentAddressDto) {
    return this.shipmentAddressesService.update(+id, updateShipmentAddressDto);
  }

  @Put(':id')
  updateEntity(@Param('id') id: string, @Body() updateShipmentAddressDto: UpdateShipmentAddressDto) {
    return this.shipmentAddressesService.update(+id, updateShipmentAddressDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shipmentAddressesService.remove(+id);
  }
}
