import { Module } from '@nestjs/common';
import { ConfigDefaultModule } from 'config/enviroment.properties.setting';
import { AgentsController } from './agents.controller';

@Module({
  imports: [ConfigDefaultModule],
  controllers: [AgentsController],
})
export class AgentsModule {}
