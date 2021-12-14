import { Account } from './../entities/account.entity';
import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from '../dto/create-account.dto';
import { UpdateAccountDto } from '../dto/update-account.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountsType } from 'src/accounts-types/entities/accounts-type.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private usersRepository: Repository<Account>,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    let user = await this.usersRepository.create(createAccountDto);
    user.accountType = createAccountDto.accountTypeId;
    console.log(user);
    await this.usersRepository.save(user);

    return user;
  }

  async findAll(
    limitSkip: number,
    limitTake: number,
    accountType: AccountsType,
  ) {
    return await this.usersRepository.find({
      where: { accountType: accountType },
      order: {
        id: 'DESC',
      },
      skip: limitSkip,
      take: limitTake,
    });
  }

  async findOne(id: number) {
    return await this.usersRepository.findOne(id);
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: { email: email },
    });
  }

  async findByuserName(userName: string) {
    return await this.usersRepository.findOne({
      where: { userName: userName },
    });
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    return await this.usersRepository.update(id, updateAccountDto);
  }

  async remove(id: number) {
    return await this.usersRepository.softDelete(id);
  }
}
