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

  async findAll(typeId: number): Promise<AccountEntity[]> {
    return this.usersRepository.find({ where: { accountTypeId: typeId } });
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
