import { Module } from '@nestjs/common';
import { AccountsProfilesService } from './accounts-profiles.service';
import { AccountsProfilesController } from './accounts-profiles.controller';

@Module({
  controllers: [AccountsProfilesController],
  providers: [AccountsProfilesService]
})
export class AccountsProfilesModule {}
