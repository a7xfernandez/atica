import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/orders/entities/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrderDetail } from './entities/order-detail.entity';

@Injectable()
export class OrderDetailsService {

  constructor(
    @InjectRepository(OrderDetail)
    private orderDetailRepository: Repository<OrderDetail>,
  ){}

  async create(createOrderDetailDto: CreateOrderDetailDto) {
    return await this.orderDetailRepository.save(createOrderDetailDto);
  }
  async insert(createOrderDetail: OrderDetail,orderId:number) {
    
    let order = new Order();

    order.id = orderId;
    createOrderDetail.order = order;

    console.log(createOrderDetail);

    return await this.orderDetailRepository.save(createOrderDetail);
  }

  async findAll() {
    return await this.orderDetailRepository.find();
  }

  async findOne(id: number) {
    return await this.orderDetailRepository.findOne(id);
  }

  async update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return await this.orderDetailRepository.update(id,updateOrderDetailDto);
  }

  async remove(id: number) {
    return await this.orderDetailRepository.softDelete(id);
  }
  async insertList(orderId:number, createOrderDetailListDto: OrderDetail[])
  {
    console.log(createOrderDetailListDto);
    return createOrderDetailListDto.forEach(element => this.insert(element,orderId));
  }
}
