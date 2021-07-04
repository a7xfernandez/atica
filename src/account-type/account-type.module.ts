import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountTypeEntity } from './models/account-type.entity';
import { AccountTypeService } from './services/account-type.service';


@Module({
  imports: [TypeOrmModule.forFeature([AccountTypeEntity])],
  exports: [TypeOrmModule, AccountTypeService],
  providers: [AccountTypeService],
})
export class AccountTypeModule {}
