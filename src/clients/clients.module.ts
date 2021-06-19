import { Module } from '@nestjs/common';
import { ConfigDefaultModule } from 'config/enviroment.properties.setting';
import { ClientsController } from './clients.controller';

@Module({
  imports: [ConfigDefaultModule],
  controllers: [ClientsController],
})
export class ClientsModule {}
