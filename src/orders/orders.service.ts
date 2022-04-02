import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common/services/common.service';
import { OrderDetailsService } from 'src/order-details/order-details.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { OrderMappingService } from './order-mapping.service';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private orderDetailService: OrderDetailsService,
    
  ){}

  async create(createOrderDto: CreateOrderDto) {
    let order = OrderMappingService.toEntityOrder(createOrderDto);
    console.log(order);
    order.itemCant =order.orderDetail.reduce((acumulator,obj)=>{return acumulator + obj.itemsCant},0)
    order.total =order.orderDetail.reduce((acumulator,obj)=>{return acumulator + obj.subtotal},0)
    let newOder = await this.orderRepository.save(order);
    let newOrderDetail = await this.orderDetailService.insertList(order.id,order.orderDetail);    
    return order;
  }

  async findAll() {
    return await this.orderRepository.find();
  }

  async findOne(id: number) {
    return await this.orderRepository.findOne(id);
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.orderRepository.update(id,updateOrderDto);
  }

  async remove(id: number) {
    return await this.orderRepository.softDelete(id);
  }

}
