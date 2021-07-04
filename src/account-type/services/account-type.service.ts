import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountTypeEntity } from '../models/account-type.entity';

@Injectable()
export class AccountTypeService {
  constructor(
    @InjectRepository(AccountTypeEntity)
    private typesRepository: Repository<AccountTypeEntity>,
  ) {}

  async findAll(typeId: number): Promise<AccountTypeEntity[]> {
    return this.typesRepository.find({ where: { accountTypeId: typeId } });
  }

  findOne(id: string): Promise<AccountTypeEntity> {
    return this.typesRepository.findOne(id);
  }

  async findOneType(typeUser: string): Promise<AccountTypeEntity> {
    return this.typesRepository.findOne({ where: { userType: typeUser } });
  }

  async save(user: AccountTypeEntity): Promise<AccountTypeEntity> {
    await this.typesRepository.save(user);
    return user;
  }

  async remove(id: string): Promise<void> {
    await this.typesRepository.delete(id);
  }
}
