import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { AccountCredentialEntity } from './models/account-credential.entity';
import { AccountCredentialService } from './services/account-credential.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountCredentialEntity]), CommonModule],
  exports: [TypeOrmModule, AccountCredentialService],
  providers: [AccountCredentialService],
})
export class AccountCredentialModule {}
