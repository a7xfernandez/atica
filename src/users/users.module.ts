import { AccountCredentialModule } from './../account-credential/account-credential.module';
import { Module } from '@nestjs/common';
import { ConfigDefaultModule } from 'config/enviroment.properties.setting';
import { AccountModule } from 'src/account/account.module';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';
import { AccountInfoKeysModule } from 'src/account-info-keys/account-info-keys.module';

@Module({
  imports: [
    ConfigDefaultModule,
    AccountModule,
    AccountCredentialModule,
    AccountInfoKeysModule,
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
