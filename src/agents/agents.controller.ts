import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApplicationConfigs } from 'config/application.properties.settings';

@ApiTags('Agents')
@Controller(`agents`)
export class AgentsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
