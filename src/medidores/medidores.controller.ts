import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedidoresService } from './medidores.service';
import { CreateMedidoreDto } from './dto/create-medidore.dto';
import { UpdateMedidoreDto } from './dto/update-medidore.dto';

@Controller('medidores')
export class MedidoresController {
  constructor(private readonly medidoresService: MedidoresService) {}

  @Post()
  create(@Body() createMedidoreDto: CreateMedidoreDto) {
    return this.medidoresService.create(createMedidoreDto);
  }

  @Get()
  findAll() {
    return this.medidoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medidoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedidoreDto: UpdateMedidoreDto) {
    return this.medidoresService.update(+id, updateMedidoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medidoresService.remove(+id);
  }
}
