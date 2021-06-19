import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountTypeEntity } from './models/account-type.entity';


@Module({
  imports: [TypeOrmModule.forFeature([AccountTypeEntity])],
  exports: [TypeOrmModule],
})
export class AccountTypeModule {}
