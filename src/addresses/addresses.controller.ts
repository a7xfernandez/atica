import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AcctionResponseDto } from 'src/common/dto/acction-response.dto';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@ApiTags('addresses')
@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Post(':accountId')
  create(@Param('accountId') accountId: number, @Body() createAddressDto: CreateAddressDto) {
    return this.addressesService.insert(accountId,createAddressDto);
  }


  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Get('/:page/:limit')
  async findAll(@Param('limit') limit: number, @Param('page') page: number) {
    let take = limit;
    let skip = (page - 1) * limit;
    return this.addressesService.findAll(skip, take);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressesService.findOne(+id);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Get('/queries/account/:accountId')
  findByAccount(@Param('accountId') accountId: string) {
    return this.addressesService.findByAccount(+accountId);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressesService.updateOne(+id, updateAddressDto);
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
    return this.addressesService.remove(+id);
  }
}
