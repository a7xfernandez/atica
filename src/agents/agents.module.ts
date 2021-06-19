import { Module } from '@nestjs/common';
import { ConfigDefaultModule } from 'config/enviroment.properties.setting';
import { AgentsController } from './agents.controller';
import { AgentsService } from './agents.service';

@Module({
  imports: [ConfigDefaultModule],
  controllers: [AgentsController],
  providers: [AgentsService],
})
export class AgentsModule {}
