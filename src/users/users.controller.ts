import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApplicationConfigs } from 'config/application.properties.settings';

@ApiTags('Users')
@Controller(`${ApplicationConfigs.router}/users`)
export class UsersController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
