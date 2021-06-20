import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountCredentialEntity } from '../models/account-credential.entity';

@Injectable()
export class AccountCredentialService {
  constructor(
    @InjectRepository(AccountCredentialEntity)
    private credentialRepository: Repository<AccountCredentialEntity>,
  ) {}

  async findOne(accountId: number): Promise<AccountCredentialEntity> {
    return this.credentialRepository.findOne({
      where: { accountId: accountId, isActive:  true },
    });
  }

  async save(
    credential: AccountCredentialEntity,
  ): Promise<AccountCredentialEntity> {
    await this.credentialRepository.save(credential);
    return credential;
  }

  async remove(id: string): Promise<void> {
    await this.credentialRepository.delete(id);
  }
}
