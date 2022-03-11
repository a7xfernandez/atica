import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServiceTypeDto } from './dto/create-service-type.dto';
import { UpdateServiceTypeDto } from './dto/update-service-type.dto';
import { ServiceType } from './entities/service-type.entity';

@Injectable()
export class ServiceTypesService {

  constructor(
    @InjectRepository(ServiceType)
    private serviceTypeRepository: Repository<ServiceType>,
  ){}

  async create(createServiceTypeDto: CreateServiceTypeDto) {
    return await this.serviceTypeRepository.save(createServiceTypeDto);
  }

  async findAll() {
    return await this.serviceTypeRepository.find();
  }

  async findOne(id: number) {
    return await this.serviceTypeRepository.findOne(id);
  }

  async update(id: number, updateServiceTypeDto: UpdateServiceTypeDto) {
    return await this.serviceTypeRepository.update(id,updateServiceTypeDto);
  }

  async remove(id: number) {
    return await this.serviceTypeRepository.softDelete(id);
  }
}
