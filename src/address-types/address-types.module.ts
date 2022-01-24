import { Module } from '@nestjs/common';
import { AddressTypesService } from './address-types.service';
import { AddressTypesController } from './address-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressType } from './entities/address-type.entity';


@Module({
  imports: [TypeOrmModule.forFeature([AddressType])],
  exports: [TypeOrmModule,AddressTypesService],
  controllers: [AddressTypesController],
  providers: [AddressTypesService]
})
export class AddressTypesModule {}
