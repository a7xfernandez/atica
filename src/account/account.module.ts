import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './models/account.entity';
import { AccountService } from './services/account.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  exports: [TypeOrmModule],
  providers: [AccountService],
})
export class AccountModule {}
