import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogisticOperatorsService } from './logistic-operators.service';
import { CreateLogisticOperatorDto } from './dto/create-logistic-operator.dto';
import { UpdateLogisticOperatorDto } from './dto/update-logistic-operator.dto';
import { ApiBearerAuth, ApiBody, ApiHeader, ApiResponse, ApiSecurity, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AcctionResponseDto } from 'src/common/dto/acction-response.dto';
import { logisticOperatorDto } from './dto/logisticOperatorDto';

@ApiTags('logistic-operators')
@Controller('logistic-operators')
export class LogisticOperatorsController {
  constructor(private readonly logisticOperatorsService: LogisticOperatorsService) {}

  @ApiBody({type: CreateLogisticOperatorDto})
  @ApiResponse({
    status:200,
    type: logisticOperatorDto,
    description:'procesado correctamente',
  })
  @Post()
  create(@Body() createLogisticOperatorDto: CreateLogisticOperatorDto) {
    return this.logisticOperatorsService.create(createLogisticOperatorDto);
  }

  @ApiResponse({
    status:200,
    type: [logisticOperatorDto],
    description:'procesado correctamente',
  })
  
  @Get('/:page/:limit')
  async findAll(@Param('limit') limit: number, @Param('page') page: number) {
    let take = limit;
    let skip = (page - 1) * limit;
    return this.logisticOperatorsService.findAll(skip,take);
  }

  @ApiResponse({
    status:200,
    type: logisticOperatorDto,
    description:'procesado correctamente',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logisticOperatorsService.findOne(+id);
  }

  @ApiBody({type: UpdateLogisticOperatorDto})
  @ApiResponse({
    status:200,
    type: AcctionResponseDto,
    description:'procesado correctamente',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLogisticOperatorDto: UpdateLogisticOperatorDto) {
    return this.logisticOperatorsService.update(+id, updateLogisticOperatorDto);
  }

  @ApiResponse({
    status: 200,
    type: AcctionResponseDto,
    description: 'procesado correctamente',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logisticOperatorsService.remove(+id);
  }
}
