import { Module } from '@nestjs/common';
import { ServiceTypesService } from './service-types.service';
import { ServiceTypesController } from './service-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceType } from './entities/service-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceType])],
  exports: [TypeOrmModule,ServiceTypesService],
  controllers: [ServiceTypesController],
  providers: [ServiceTypesService]
})
export class ServiceTypesModule {}
