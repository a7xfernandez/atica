import { AccountEntity } from './../../account/models/account.entity';
import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/services/account.service';

@Injectable()
export class UsersService {
  constructor(
    private accountService: AccountService,
  ) {}

  async create(user: AccountEntity ){
      return this.accountService.create(user);
  }



}
