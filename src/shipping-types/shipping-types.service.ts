import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShippingTypeDto } from './dto/create-shipping-type.dto';
import { UpdateShippingTypeDto } from './dto/update-shipping-type.dto';
import { ShippingType } from './entities/shipping-type.entity';

@Injectable()
export class ShippingTypesService {

  constructor(
    @InjectRepository(ShippingType)
    private shippingTypeRepository: Repository<ShippingType>,
  ){}

  async create(createShippingTypeDto: CreateShippingTypeDto) {
    return await this.shippingTypeRepository.save(createShippingTypeDto);
  }

  async findAll() {
    return await this.shippingTypeRepository.find();
  }

  async findOne(id: number) {
    return await this.shippingTypeRepository.findOne(id);
  }

  async update(id: number, updateShippingTypeDto: UpdateShippingTypeDto) {
    return await this.shippingTypeRepository.update(id,updateShippingTypeDto);
  }

  async remove(id: number) {
    return await this.shippingTypeRepository.softDelete(id);
  }
}
