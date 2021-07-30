import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountsTypeDto } from '../dto/create-accounts-type.dto';
import { UpdateAccountsTypeDto } from '../dto/update-accounts-type.dto';
import { AccountsType } from '../entities/accounts-type.entity';

@Injectable()
export class AccountsTypesService {
  constructor(
    @InjectRepository(AccountsType)
    private typesRepository: Repository<AccountsType>,
  ) {}

  async findAll() {
    return await this.typesRepository.find();
  }

  async findOne(id: number) {
    return await this.typesRepository.findOne(id);
  }

  async findOneByUserType(typeUser: string) {
    return await this.typesRepository.findOne({
      where: { userType: typeUser },
    });
  }
}
