import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomersService } from 'src/customers/services/customers.service';
import { Repository } from 'typeorm';
import { CreateShipmentAddressDto } from './dto/create-shipment-address.dto';
import { UpdateShipmentAddressDto } from './dto/update-shipment-address.dto';
import { ShipmentAddress } from './entities/shipment-address.entity';

@Injectable()
export class ShipmentAddressesService {
  constructor(
    @InjectRepository(ShipmentAddress)
    private shipmentAddressRepository: Repository<ShipmentAddress>,
    //private customerService: CustomersService,
  ){}

  async create(createShipmentAddressDto: CreateShipmentAddressDto) {
    //let shipmentAddress = new ShipmentAddress();
    return await this.shipmentAddressRepository.save(createShipmentAddressDto);
  }

  async add(createShipmentAddressesDto: CreateShipmentAddressDto[]){
    return createShipmentAddressesDto.forEach(element=>this.create(element));
  }

  async findAll(limitSkip: number, limitTake: number) {
    return await this.shipmentAddressRepository.find({
      order: {
        id: 'DESC',
      },
      skip: limitSkip,
      take: limitTake,
    });
  }

  async findOne(id: number) {
    return await this.shipmentAddressRepository.findOne(id);
  }

  async update(id: number, updateShipmentAddressDto: UpdateShipmentAddressDto) {
    return await this.shipmentAddressRepository.update(id,updateShipmentAddressDto);
  }

  async remove(id: number) {
    return await this.shipmentAddressRepository.softDelete(id);
  }
}
