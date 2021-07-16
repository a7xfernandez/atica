import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApplicationConfigs } from 'config/application.properties.settings';

@ApiTags('Packages')
@Controller(`packages`)
export class PackagesController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
