import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountCredentialEntity } from './models/account-credential.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountCredentialEntity])],
  exports: [TypeOrmModule],
})
export class AccountCredentialModule {}
