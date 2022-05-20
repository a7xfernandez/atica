import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FincasService } from './fincas.service';
import { CreateFincaDto } from './dto/create-finca.dto';
import { UpdateFincaDto } from './dto/update-finca.dto';

@Controller('fincas')
export class FincasController {
  constructor(private readonly fincasService: FincasService) {}

  @Post()
  create(@Body() createFincaDto: CreateFincaDto) {
    return this.fincasService.create(createFincaDto);
  }

  @Get()
  findAll() {
    return this.fincasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fincasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFincaDto: UpdateFincaDto) {
    return this.fincasService.update(+id, updateFincaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fincasService.remove(+id);
  }
}
