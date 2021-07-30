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

  create(createAccountsCredentialDto: CreateAccountsCredentialDto) {
    createAccountsCredentialDto.credential = this.commonService.hashPassword(
      createAccountsCredentialDto.credential,
    );
    let credential = this.credentialRepository.save(createAccountsCredentialDto);
    return credential;
  }

  findOne(id: number) {
    return this.credentialRepository.findOne({
      where: { accountId: id, isActive: true },
    });;
  }

  remove(id: number) {
    let credential = this.findOne(id);
    return this.credentialRepository.softDelete(id);
  }
}
