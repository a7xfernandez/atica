import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountProfileKeysEntity } from './models/account-profile-keys.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountProfileKeysEntity])],
  exports: [TypeOrmModule],
})
export class AccountInfoKeysModule {}
