import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { AccountsModule } from 'src/accounts/accounts.module';

@Module({
  imports: [TypeOrmModule.forFeature([Address]),AccountsModule],
  exports: [TypeOrmModule,AddressesService],
  controllers: [AddressesController],
  providers: [AddressesService]
})
export class AddressesModule {}
