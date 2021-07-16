import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApplicationConfigs } from 'config/application.properties.settings';

@ApiTags('Clients')
@Controller(`clients`)
export class ClientsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
