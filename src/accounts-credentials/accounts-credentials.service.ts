import { Injectable } from '@nestjs/common';
import { CreateAccountsCredentialDto } from './dto/create-accounts-credential.dto';
import { UpdateAccountsCredentialDto } from './dto/update-accounts-credential.dto';

@Injectable()
export class AccountsCredentialsService {
  create(createAccountsCredentialDto: CreateAccountsCredentialDto) {
    return 'This action adds a new accountsCredential';
  }

  findAll() {
    return `This action returns all accountsCredentials`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountsCredential`;
  }

  update(id: number, updateAccountsCredentialDto: UpdateAccountsCredentialDto) {
    return `This action updates a #${id} accountsCredential`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountsCredential`;
  }
}
