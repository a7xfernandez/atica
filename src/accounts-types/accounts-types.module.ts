import { Module } from '@nestjs/common';
import { AccountsTypesService } from './accounts-types.service';
import { AccountsTypesController } from './accounts-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsType } from './entities/accounts-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountsType])],
  exports: [TypeOrmModule, AccountsTypesService],
  //controllers: [AccountsTypesController],
  providers: [AccountsTypesService],
})
export class AccountsTypesModule {}
