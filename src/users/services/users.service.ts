import { AccountCredentialService } from './../../account-credential/services/account-credential.service';
import { AccountCredentialEntity } from './../../account-credential/models/account-credential.entity';
import { AccountEntity } from './../../account/models/account.entity';
import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/services/account.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly saltRounds = 10;

  constructor(
    private accountService: AccountService,
    private credentialService: AccountCredentialService,
  ) {}

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    return await bcrypt.hash(password, salt);
  }

  async create(user: AccountEntity) {
    return this.accountService.save(user);
  }

  async setCredential(credential: AccountCredentialEntity) {
    credential.credential = await this.hashPassword(credential.credential);
    await this.credentialService.save(credential);
    console.log(credential);
    return;
  }
}
