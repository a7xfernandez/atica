import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Order])],
  exports: [TypeOrmModule,OrdersService],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
