import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressTypeDto } from './dto/create-address-type.dto';
import { UpdateAddressTypeDto } from './dto/update-address-type.dto';
import { AddressType } from './entities/address-type.entity';

@Injectable()
export class AddressTypesService {
  constructor(
    @InjectRepository(AddressType)
    private addresstypeRepository: Repository<AddressType>,
  ) {}

  async create(createAddressTypeDto: CreateAddressTypeDto) {
    return await this.addresstypeRepository.save(createAddressTypeDto);
  }

  async findAll() {
    return await this.addresstypeRepository.find();
  }

  async findOne(id: number) {
    return await this.addresstypeRepository.findOne(id);
  }

  async update(id: number, updateAddressTypeDto: UpdateAddressTypeDto) {
    return await this.addresstypeRepository.update(id,updateAddressTypeDto);
  }

  async remove(id: number) {
    return await this.addresstypeRepository.softDelete(id);
  }
}
