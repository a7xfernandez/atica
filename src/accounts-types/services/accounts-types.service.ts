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

  findAll() {
    return this.typesRepository.find();
  }

  findOne(id: number) {
    return this.typesRepository.findOne(id);
  }

  findOneByUserType(typeUser: string) {
    return this.typesRepository.findOne({ where: { userType: typeUser } });
  }

}
