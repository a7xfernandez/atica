import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/accounts/entities/account.entity';
import { AccountsService } from 'src/accounts/services/accounts.service';
import { AddressType } from 'src/address-types/entities/address-type.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
    private accountService: AccountsService,
  ) {}
  
  async create(createAddressDto: CreateAddressDto) {
    let createAddressEntity = new Address();    

    createAddressEntity.addressType = createAddressDto.addressType;
    createAddressEntity.country = createAddressDto.country;
    createAddressEntity.zipCode = createAddressDto.zipCode;
    createAddressEntity.state = createAddressDto.state;
    createAddressEntity.city = createAddressDto.city;
    createAddressEntity.street = createAddressDto.street;
    createAddressEntity.email = createAddressDto.email;
    createAddressEntity.phoneNumber2 = createAddressDto.phoneNumber2;
    createAddressEntity.phoneNumber1 = createAddressDto.phoneNumber1;
    createAddressEntity.contactName = createAddressDto.contactName;

    return await this.addressRepository.save(createAddressEntity);
  }
  async insert(id: number,createAddressDto: CreateAddressDto) {
    let createAddressEntity = new Address();

    let account = new Account();
    account.id = id;

    createAddressEntity.account=account; 

    createAddressEntity.addressType = createAddressDto.addressType;
    createAddressEntity.country = createAddressDto.country;
    createAddressEntity.zipCode = createAddressDto.zipCode;
    createAddressEntity.state = createAddressDto.state;
    createAddressEntity.city = createAddressDto.city;
    createAddressEntity.street = createAddressDto.street;
    createAddressEntity.email = createAddressDto.email;
    createAddressEntity.phoneNumber2 = createAddressDto.phoneNumber2;
    createAddressEntity.phoneNumber1 = createAddressDto.phoneNumber1;
    createAddressEntity.contactName = createAddressDto.contactName;

    return await this.addressRepository.save(createAddressEntity);
  }
  async updateOne(id: number,createAddressDto: UpdateAddressDto) {
    let createAddressEntity = new Address();

    //let account = await this.accountService.findOne(id);    

    //createAddressEntity.account=account;
    createAddressEntity.addressType = createAddressDto.addressType;
    createAddressEntity.country = createAddressDto.country;
    createAddressEntity.zipCode = createAddressDto.zipCode;
    createAddressEntity.state = createAddressDto.state;
    createAddressEntity.city = createAddressDto.city;
    createAddressEntity.street = createAddressDto.street;
    createAddressEntity.email = createAddressDto.email;
    createAddressEntity.phoneNumber2 = createAddressDto.phoneNumber2;
    createAddressEntity.phoneNumber1 = createAddressDto.phoneNumber1;
    createAddressEntity.contactName = createAddressDto.contactName;

    return await this.addressRepository.update(id,createAddressEntity);
  }

  async findAll(limitSkip: number, limitTake: number) {
    return await this.addressRepository.find({
      order: {
        id: 'DESC',
      },
      skip: limitSkip,
      take: limitTake,
    });
  }

  async findOne(id: number) {
    return this.addressRepository.findOne(id);
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {

    let updateAdressEntity = new Address();
    
    
    updateAdressEntity.addressType=updateAddressDto.addressType;
    updateAdressEntity.country = updateAddressDto.country;
    updateAdressEntity.zipCode = updateAddressDto.zipCode;
    updateAdressEntity.state = updateAddressDto.state;
    updateAdressEntity.city = updateAddressDto.city;
    updateAdressEntity.street = updateAddressDto.street;
    updateAdressEntity.email = updateAddressDto.email;
    updateAdressEntity.phoneNumber2 = updateAddressDto.phoneNumber2;
    updateAdressEntity.phoneNumber1 = updateAddressDto.phoneNumber1;
    updateAdressEntity.contactName = updateAddressDto.contactName;

    return await this.addressRepository.update(id,updateAdressEntity);
  }

   async findByAccount(accountId: number){
    let account = await this.accountService.findOne(accountId);     
    return this.addressRepository.find({
      where: {account: account},
      order: {
        id: 'DESC',
      }
    });    
  }

  async remove(id: number) {
    return await this.addressRepository.softDelete(id);
  }

  async insertList(id: number,createAddressesDto: CreateAddressDto[])
  {
    console.log(createAddressesDto);
    console.log(id);
    return createAddressesDto.forEach(element=>this.insert(id,element))
  }
  async updateList(updateAddressDto: UpdateAddressDto[])
  {
    return updateAddressDto.forEach(element => this.updateOne(element.id,element))    
  }
}
