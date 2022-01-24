import { Module } from '@nestjs/common';
import { ShipmentAddressesService } from './shipment-addresses.service';
import { ShipmentAddressesController } from './shipment-addresses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipmentAddress } from './entities/shipment-address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShipmentAddress])],
  exports: [TypeOrmModule,ShipmentAddressesService],
  controllers: [ShipmentAddressesController],
  providers: [ShipmentAddressesService]
})
export class ShipmentAddressesModule {}
