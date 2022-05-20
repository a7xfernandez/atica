import { Module } from '@nestjs/common';
import { TemperaturesService } from './temperatures.service';
import { TemperaturesController } from './temperatures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Temperature } from './entities/temperature.entity';
import { MedidoresModule } from 'src/medidores/medidores.module';

@Module({
  imports: [TypeOrmModule.forFeature([Temperature]),MedidoresModule],
  exports: [TypeOrmModule,TemperaturesService],
  controllers: [TemperaturesController],
  providers: [TemperaturesService]
})
export class TemperaturesModule {}
