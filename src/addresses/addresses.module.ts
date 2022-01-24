import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  exports: [TypeOrmModule,AddressesService],
  controllers: [AddressesController],
  providers: [AddressesService]
})
export class AddressesModule {}
