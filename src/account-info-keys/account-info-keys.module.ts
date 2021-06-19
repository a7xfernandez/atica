import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountProfileKeysEntity } from './models/account-profile-keys.entity';
import { AccountProfileKeysService } from './services/account-profile-keys.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountProfileKeysEntity])],
  exports: [TypeOrmModule],
  providers: [AccountProfileKeysService],
})
export class AccountInfoKeysModule {}
