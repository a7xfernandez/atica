import { Module } from '@nestjs/common';
import { ConfigDefaultModule } from 'config/enviroment.properties.setting';
import { AccountsCredentialsModule } from 'src/accounts-credentials/accounts-credentials.module';
import { AccountsProfilesModule } from 'src/accounts-profiles/accounts-profiles.module';
import { AccountsTypesModule } from 'src/accounts-types/accounts-types.module';
import { AccountsModule } from 'src/accounts/accounts.module';
import { CommonModule } from 'src/common/common.module';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    ConfigDefaultModule,
    AccountsModule,
    AccountsCredentialsModule,
    AccountsProfilesModule,
    AccountsTypesModule,
    CommonModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
