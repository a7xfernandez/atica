import { Module } from '@nestjs/common';
import { FincasService } from './fincas.service';
import { FincasController } from './fincas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Finca } from './entities/finca.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Finca])],
  exports: [TypeOrmModule, FincasService],
  controllers: [FincasController],
  providers: [FincasService]
})
export class FincasModule {}
