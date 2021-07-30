import { Account } from './../entities/account.entity';
import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from '../dto/create-account.dto';
import { UpdateAccountDto } from '../dto/update-account.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountsType } from 'src/accounts-types/entities/accounts-type.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private usersRepository: Repository<Account>,
  ) {}

  create(createAccountDto: CreateAccountDto) {
    return this.usersRepository.save(createAccountDto);
  }

  findAll(
    limitSkip: number,
    limitTake: number,
    accountType: AccountsType,
  ) {
    return this.usersRepository.find({
      where: { accountType: accountType },
      order: {
        id: 'DESC',
      },
      skip: limitSkip,
      take: limitTake,
    });
  }

  findOne(id: number) {
     return this.usersRepository.findOne(id);
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return this.usersRepository.update(id, updateAccountDto);
  }

  remove(id: number) {
    return this.usersRepository.softDelete(id);
  }
}
