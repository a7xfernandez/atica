import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
}
