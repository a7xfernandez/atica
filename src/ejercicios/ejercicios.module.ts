import { Module } from '@nestjs/common';
import { EjerciciosService } from './ejercicios.service';
import { EjerciciosController } from './ejercicios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ejercicio } from './entities/ejercicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ejercicio])],
  exports: [TypeOrmModule, EjerciciosService],
  controllers: [EjerciciosController],
  providers: [EjerciciosService]
})
export class EjerciciosModule {}
