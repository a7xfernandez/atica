import { Module } from '@nestjs/common';
import { ConfigDefaultModule } from 'config/enviroment.properties.setting';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';

@Module({
  imports:[ConfigDefaultModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
