import { Module } from '@nestjs/common';
import { ShippingTypesService } from './shipping-types.service';
import { ShippingTypesController } from './shipping-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShippingType } from './entities/shipping-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShippingType])],
  exports: [TypeOrmModule,ShippingTypesService],
  controllers: [ShippingTypesController],
  providers: [ShippingTypesService]
})
export class ShippingTypesModule {}
