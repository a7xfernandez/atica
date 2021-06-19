import { Module } from '@nestjs/common';
import { ConfigDefaultModule } from 'config/enviroment.properties.setting';
import { ClientsController } from './clients.controller';
import { ClientsService } from './services/clients.service';

@Module({
  imports: [ConfigDefaultModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
