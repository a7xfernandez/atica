import { Module } from '@nestjs/common';
import { AccountsProfilesService } from './services/accounts-profiles.service';
import { AccountsProfilesController } from './accounts-profiles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsProfile } from './entities/accounts-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountsProfile])],
  exports: [TypeOrmModule, AccountsProfilesService],
  controllers: [AccountsProfilesController],
  providers: [AccountsProfilesService],
})
export class AccountsProfilesModule {}
