import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common/services/common.service';
import { Repository } from 'typeorm';
import { CreateAccountsCredentialDto } from '../dto/create-accounts-credential.dto';
import { UpdateAccountsCredentialDto } from '../dto/update-accounts-credential.dto';
import { AccountsCredential } from '../entities/accounts-credential.entity';

@Injectable()
export class AccountsCredentialsService {
  constructor(
    private commonService: CommonService,
    @InjectRepository(AccountsCredential)
    private credentialRepository: Repository<AccountsCredential>,
  ) {}

  async create(createAccountsCredentialDto: CreateAccountsCredentialDto) {
    createAccountsCredentialDto.credential = await this.commonService.hashPassword(
      createAccountsCredentialDto.credential,
    );
    let credential = await this.credentialRepository.save(
      createAccountsCredentialDto,
    );
    return credential;
  }

  async findOne(id: number) {
    return await this.credentialRepository.findOne({
      where: { accountId: id, isActive: true },
    });;
  }

  async remove(id: number) {
    let credential = await this.findOne(id);
    return this.credentialRepository.softDelete(id);
  }
}
