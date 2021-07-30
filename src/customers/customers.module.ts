import { Module } from '@nestjs/common';
import { CustomersService } from './services/customers.service';
import { CustomersController } from './customers.controller';
import { ConfigDefaultModule } from 'config/enviroment.properties.setting';
import { AccountsModule } from 'src/accounts/accounts.module';
import { AccountsCredentialsModule } from 'src/accounts-credentials/accounts-credentials.module';
import { AccountsProfilesModule } from 'src/accounts-profiles/accounts-profiles.module';
import { AccountsTypesModule } from 'src/accounts-types/accounts-types.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [
    ConfigDefaultModule,
    AccountsModule,
    AccountsCredentialsModule,
    AccountsProfilesModule,
    AccountsTypesModule,
    CommonModule,
  ],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
