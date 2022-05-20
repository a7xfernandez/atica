import { Module } from '@nestjs/common';
import { PecerasService } from './peceras.service';
import { PecerasController } from './peceras.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pecera } from './entities/pecera.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pecera])],
  exports: [TypeOrmModule,PecerasService],
  controllers: [PecerasController],
  providers: [PecerasService]
})
export class PecerasModule {}
