import { Module } from '@nestjs/common';
import { TrackingsService } from './trackings.service';
import { TrackingsController } from './trackings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tracking } from './entities/tracking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tracking])],
  exports: [TypeOrmModule,TrackingsService],
  controllers: [TrackingsController],
  providers: [TrackingsService]
})
export class TrackingsModule {}
