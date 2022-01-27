import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAccountDto } from 'src/accounts/dto/update-account.dto';
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
    createAccountsCredentialDto.credential =
      await this.commonService.hashPassword(
        createAccountsCredentialDto.credential,
      );
    let credential = await this.credentialRepository.save(
      createAccountsCredentialDto,
    );
    return credential;
  }

  async findByAccount(user) {
    return await this.credentialRepository.findOne({
      where: { account: user, isActive: true },
    });
  }

  async findOne(id: number) {
    return await this.credentialRepository.findOne({
      where: { id: id, isActive: true },
    });
  }

  async remove(id: number) {
    let credential = await this.findOne(id);
    return this.credentialRepository.softDelete(id);
  }
  async update(id: number,updateAccountsCredentialDto: UpdateAccountsCredentialDto)
  {
    return this.credentialRepository.update(id,updateAccountsCredentialDto);
  }
}
