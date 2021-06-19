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

  async create(user:AccountEntity): Promise<AccountEntity> {
      await this.usersRepository.save(user);
      return user;
  }
}
