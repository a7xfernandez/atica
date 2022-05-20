import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PecerasService } from './peceras.service';
import { CreatePeceraDto } from './dto/create-pecera.dto';
import { UpdatePeceraDto } from './dto/update-pecera.dto';

@Controller('peceras')
export class PecerasController {
  constructor(private readonly pecerasService: PecerasService) {}

  @Post()
  create(@Body() createPeceraDto: CreatePeceraDto) {
    return this.pecerasService.create(createPeceraDto);
  }

  @Get()
  findAll() {
    return this.pecerasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pecerasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeceraDto: UpdatePeceraDto) {
    return this.pecerasService.update(+id, updatePeceraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pecerasService.remove(+id);
  }
}
