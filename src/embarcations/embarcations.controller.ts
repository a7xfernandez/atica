import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmbarcationsService } from './embarcations.service';
import { CreateEmbarcationDto } from './dto/create-embarcation.dto';
import { UpdateEmbarcationDto } from './dto/update-embarcation.dto';
import { ApiBearerAuth, ApiBody, ApiHeader, ApiResponse, ApiSecurity, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { EmbarcationDto } from './dto/EmbarcationDto';
import { AcctionResponseDto } from 'src/common/dto/acction-response.dto';

@ApiTags('embarcations')
@Controller('embarcations')
export class EmbarcationsController {
  constructor(private readonly embarcationsService: EmbarcationsService) {}
  @ApiBody({ type: CreateEmbarcationDto })
  @ApiResponse({
    status: 200,
    type: EmbarcationDto,
    description: 'procesado correctamente',
  })
  @Post()
  create(@Body() createEmbarcationDto: CreateEmbarcationDto) {
    return this.embarcationsService.create(createEmbarcationDto);
  }

  @ApiResponse({
    status: 200,
    type: [EmbarcationDto],
    description: 'procesado correctamente',
  })
  @Get('/:page/:limit')
  async findAll(@Param('limit') limit: number, @Param('page') page: number) {
    let take = limit;
    let skip = (page - 1) * limit;
    return this.embarcationsService.findAll(skip, take);
  }

  @ApiResponse({
    status: 200,
    type: EmbarcationDto,
    description: 'procesado correctamente',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.embarcationsService.findOne(+id);
  }
  @ApiBody({type: UpdateEmbarcationDto})
  @ApiResponse({
    status: 200,
    type:AcctionResponseDto,
    description: 'procesado correctamente',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmbarcationDto: UpdateEmbarcationDto) {
    return this.embarcationsService.update(+id, updateEmbarcationDto);
  }

  @ApiResponse({
    status: 200,
    type: AcctionResponseDto,
    description: 'procesado correctamente',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.embarcationsService.remove(+id);
  }
}
