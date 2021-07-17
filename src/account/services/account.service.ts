import { AccountTypeEntity } from './../../account-type/models/account-type.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountEntity } from '../models/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity)
    private usersRepository: Repository<AccountEntity>,
  ) {}

  async findAll(
    limitSkip: number,
    limitTake: number,
    accountType: AccountTypeEntity,
  ): Promise<AccountEntity[]> {
    return this.usersRepository.find({
      where: { accountType: accountType },
      order: {
        id: 'DESC',
      },
      skip: limitSkip,
      take: limitTake,
    });
  }

  findOne(id: string): Promise<AccountEntity> {
    return this.usersRepository.findOne(id);
  }

  async save(user: AccountEntity): Promise<AccountEntity> {
    await this.usersRepository.save(user);
    return user;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
