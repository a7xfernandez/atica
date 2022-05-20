import { Module } from '@nestjs/common';
import { MedidoresService } from './medidores.service';
import { MedidoresController } from './medidores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medidore } from './entities/medidore.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medidore])],
  exports: [TypeOrmModule,MedidoresService],
  controllers: [MedidoresController],
  providers: [MedidoresService]
})
export class MedidoresModule {}
