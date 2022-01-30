import { Account } from './../entities/account.entity';
import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from '../dto/create-account.dto';
import { UpdateAccountDto } from '../dto/update-account.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountsType } from 'src/accounts-types/entities/accounts-type.entity';
import { CommonService } from 'src/common/services/common.service';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private usersRepository: Repository<Account>,
    private commonService: CommonService,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    this.commonService.raiseErrorUniqueEmail(await this.isNotNewEmail(createAccountDto.email));
    let user = await this.usersRepository.create(createAccountDto);
    user.accountType = createAccountDto.accountTypeId;    
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
  async getAll(
    accountType: AccountsType,
  ) {
    return await this.usersRepository.find({ relations:["addresses"],
      where: { accountType: accountType },
      order: {
        id: 'DESC',
      }
    });
  }

  async findOne(id: number) {
    return await this.usersRepository.findOne({relations:["addresses"],
  where:{id:id}});
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
    this.commonService.raiseErrorUniqueEmail(await this.isNotAUpdatebleMail(id,updateAccountDto.email));
    return await this.usersRepository.update(id, updateAccountDto);
  }

  async remove(id: number) {
    return await this.usersRepository.softDelete(id);
  }

  async isNotNewEmail(email:string)
  {
    let account = await this.findByEmail(email);    
    if(account==null && account== undefined)return false;
    
    return true;
  }

  async isNotAUpdatebleMail(accountId: number, email: string) {
    let account = await this.findByEmail(email);    
    if(account!=null && account!= undefined)
    {
      if(accountId==account.id) return false;

      return true;
    }
    return false;
  }
}
