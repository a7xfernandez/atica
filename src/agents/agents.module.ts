import { Module } from '@nestjs/common';
import { AgentsService } from './services/agents.service';
import { AgentsController } from './agents.controller';
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
  controllers: [AgentsController],
  providers: [AgentsService],
})
export class AgentsModule {}
