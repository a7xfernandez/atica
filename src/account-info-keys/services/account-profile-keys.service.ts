import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountProfileKeysEntity } from '../models/account-profile-keys.entity';

@Injectable()
export class AccountProfileKeysService {
  constructor(
    @InjectRepository(AccountProfileKeysEntity)
    private keysRepository: Repository<AccountProfileKeysEntity>,
  ) {}

  async findAll(typeId: number): Promise<AccountProfileKeysEntity[]> {
    return this.keysRepository.find({ where: { accountTypeId: typeId } });
  }

  findOne(id: string): Promise<AccountProfileKeysEntity> {
    return this.keysRepository.findOne(id);
  }

  async save(user: AccountProfileKeysEntity): Promise<AccountProfileKeysEntity> {
    await this.keysRepository.save(user);
    return user;
  }

  async remove(id: string): Promise<void> {
    await this.keysRepository.delete(id);
  }
}
