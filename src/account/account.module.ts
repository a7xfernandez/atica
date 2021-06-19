import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './models/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  exports: [TypeOrmModule],
})
export class AccountModule {}
