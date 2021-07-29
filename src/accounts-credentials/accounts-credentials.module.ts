import { Module } from '@nestjs/common';
import { AccountsCredentialsService } from './accounts-credentials.service';
import { AccountsCredentialsController } from './accounts-credentials.controller';

@Module({
  controllers: [AccountsCredentialsController],
  providers: [AccountsCredentialsService]
})
export class AccountsCredentialsModule {}
