import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountInfoKeysEntity } from './models/account-info-keys.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountInfoKeysEntity])],
  exports: [TypeOrmModule],
})
export class AccountInfoKeysModule {}
