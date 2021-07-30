import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountsProfileDto } from '../dto/create-accounts-profile.dto';
import { UpdateAccountsProfileDto } from '../dto/update-accounts-profile.dto';
import { AccountsProfile } from '../entities/accounts-profile.entity';

@Injectable()
export class AccountsProfilesService {
  constructor(
    @InjectRepository(AccountsProfile)
    private profileRepository: Repository<AccountsProfile>,
  ) {}

  findOne(id: number) {
    return this.profileRepository.findOne({
      where: { accountId: id, isActive: true },
    });
  }

  update(id: number, updateAccountsProfileDto: UpdateAccountsProfileDto) {
    return this.profileRepository.update(id, updateAccountsProfileDto);
  }

  remove(id: number) {
     return this.profileRepository.softDelete(id);
  }
}
