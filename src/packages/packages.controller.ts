import { AcctionResponseDto } from './../common/dto/acction-response.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PackagesService } from './services/packages.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PackageDto } from './dto/package.dto';

@ApiTags('packages')
@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

  @ApiBody({ type: CreatePackageDto })
  @ApiResponse({
    status: 200,
    type: PackageDto,
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPackageDto: CreatePackageDto) {
    return this.packagesService.create(createPackageDto);
  }

  @ApiResponse({
    status: 200,
    type: [PackageDto],
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Get('/:page/:limit')
  async findAll(@Param('limit') limit: number, @Param('page') page: number) {
    let take = limit;
    let skip = (page - 1) * limit;
    return this.packagesService.findAll(skip, take);
  }

  @ApiResponse({
    status: 200,
    type: PackageDto,
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packagesService.findOne(+id);
  }

  @ApiBody({ type: UpdatePackageDto })
  @ApiResponse({
    status: 200,
    type: AcctionResponseDto,
    description: 'procesado correctamente',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePackageDto: UpdatePackageDto) {
    return this.packagesService.update(+id, updatePackageDto);
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
    return this.packagesService.remove(+id);
  }
}
