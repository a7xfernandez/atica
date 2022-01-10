import { Module } from '@nestjs/common';
import { EmbarcationsService } from './embarcations.service';
import { EmbarcationsController } from './embarcations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Embarcation } from './entities/embarcation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Embarcation])],
  exports: [TypeOrmModule, EmbarcationsService],
  controllers: [EmbarcationsController],
  providers: [EmbarcationsService],
})
export class EmbarcationsModule {}
