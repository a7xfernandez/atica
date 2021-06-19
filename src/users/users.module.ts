import { Module } from '@nestjs/common';
import { ConfigDefaultModule } from 'config/enviroment.properties.setting';
import { AccountModule } from 'src/account/account.module';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [ConfigDefaultModule, AccountModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
