import { AccountsCredential } from './entities/accounts-credential.entity';
import { Module } from '@nestjs/common';
import { AccountsCredentialsService } from './services/accounts-credentials.service';
import { AccountsCredentialsController } from './accounts-credentials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [TypeOrmModule.forFeature([AccountsCredential]), CommonModule],
  exports: [TypeOrmModule, AccountsCredentialsService],
  controllers: [AccountsCredentialsController],
  providers: [AccountsCredentialsService],
})
export class AccountsCredentialsModule {}
