import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountCredentialEntity } from './models/account-credential.entity';
import { AccountCredentialService } from './services/account-credential.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountCredentialEntity])],
  exports: [TypeOrmModule, AccountCredentialService],
  providers: [AccountCredentialService],
})
export class AccountCredentialModule {}
