import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { CommonModule } from 'src/common/common.module';
import { OrderDetailsModule } from 'src/order-details/order-details.module';
import { EmbarcationsModule } from 'src/embarcations/embarcations.module';

@Module({
  imports:[TypeOrmModule.forFeature([Order])
          ,CommonModule
          ,OrderDetailsModule
          ,CommonModule
          ,EmbarcationsModule],
  exports: [TypeOrmModule,OrdersService],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
