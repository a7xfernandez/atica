import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common/services/common.service';
import { EmbarcationsService } from 'src/embarcations/embarcations.service';
import { OrderDetailsService } from 'src/order-details/order-details.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { OrderMappingService } from './order-mapping.service';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private orderDetailService: OrderDetailsService,
    private embarcationService: EmbarcationsService,
    
  ){}

  async create(createOrderDto: CreateOrderDto) {
    let order = OrderMappingService.toEntityOrder(createOrderDto);
    
    order.itemCant =order.orderDetail.reduce((acumulator,obj)=>{return acumulator + obj.itemsCant},0)
    order.total =order.orderDetail.reduce((acumulator,obj)=>{return acumulator + obj.subtotal},0)
    let embarcationWeigthUpdate = await this.embarcationService.updateWeigthCapacityUsed(order.embarcation.id,order.packageweigth);
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

  async remove(id: number) {
    return await this.orderRepository.softDelete(id);
  }

}
