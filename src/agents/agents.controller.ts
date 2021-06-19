import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApplicationConfigs } from 'config/application.properties.settings';

@ApiTags('Agents')
@Controller(`${ApplicationConfigs.router}/agents`)
export class AgentsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
