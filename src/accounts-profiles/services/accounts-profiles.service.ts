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

  async findOne(id: number) {
    return await this.profileRepository.findOne({
      where: { accountId: id, isActive: true },
    });
  }

  async update(id: number, updateAccountsProfileDto: UpdateAccountsProfileDto) {
    return await this.profileRepository.update(id, updateAccountsProfileDto);
  }

  async remove(id: number) {
     return await this.profileRepository.softDelete(id);
  }
}
