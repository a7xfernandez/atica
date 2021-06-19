import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApplicationConfigs } from 'config/application.properties.settings';

@ApiTags('Clients')
@Controller(`${ApplicationConfigs.router}/clients`)
export class ClientsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
