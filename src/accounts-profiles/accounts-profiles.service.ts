import { Injectable } from '@nestjs/common';
import { CreateAccountsProfileDto } from './dto/create-accounts-profile.dto';
import { UpdateAccountsProfileDto } from './dto/update-accounts-profile.dto';

@Injectable()
export class AccountsProfilesService {
  create(createAccountsProfileDto: CreateAccountsProfileDto) {
    return 'This action adds a new accountsProfile';
  }

  findAll() {
    return `This action returns all accountsProfiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountsProfile`;
  }

  update(id: number, updateAccountsProfileDto: UpdateAccountsProfileDto) {
    return `This action updates a #${id} accountsProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountsProfile`;
  }
}
