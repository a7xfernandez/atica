import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetail } from './entities/order-detail.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports:[TypeOrmModule.forFeature([OrderDetail]),CommonModule],
  exports: [TypeOrmModule,OrderDetailsService],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService]
})
export class OrderDetailsModule {}
