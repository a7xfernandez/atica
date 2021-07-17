import { AccountTypeService } from './../../account-type/services/account-type.service';
import { CommonService } from './../../common/services/common.service';
import { UserCreateDto } from './../dto/user.create.request.dto';
import { AccountCredentialService } from './../../account-credential/services/account-credential.service';
import { AccountCredentialEntity } from './../../account-credential/models/account-credential.entity';
import { AccountEntity } from './../../account/models/account.entity';
import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/services/account.service';

import { UserDto } from '../dto/user.response.dto';
import { UserIdDto } from '../dto/user.id.dto';

@Injectable()
export class UsersService {
  constructor(
    private accountService: AccountService,
    private credentialService: AccountCredentialService,
    private accountTypeService: AccountTypeService,
    private commonService: CommonService,
  ) {}

  async find(userId: string): Promise<UserDto> {
    let userResDto: UserDto = new UserDto();
    let userEntity = await this.accountService.findOne(userId);

    userResDto.id = userEntity.id;
    userResDto.email = userEntity.email;
    userResDto.firstName = userEntity.firstName;
    userResDto.lastName = userEntity.lastName;
    userResDto.userName = userEntity.userName;

    return userResDto;
  }

  async findAll(offset: number, take: number): Promise<UserDto[]> {
    let typeEntity = await this.accountTypeService.findOneType('User');
    let usersEntity = await this.accountService.findAll(
      offset,
      take,
      typeEntity);

    let usersResDto = await usersEntity.map( (userEntity: AccountEntity)=>{
      let userResDto: UserDto = new UserDto();
       userResDto.id = userEntity.id;
       userResDto.email = userEntity.email;
       userResDto.firstName = userEntity.firstName;
       userResDto.lastName = userEntity.lastName;
       userResDto.userName = userEntity.userName;
      return userResDto;
    });

    return usersResDto;
  }

  async create(userDto: UserCreateDto): Promise<UserDto> {
    let userNew = new AccountEntity();
    let credential = new AccountCredentialEntity();
    let userResDto: UserDto = new UserDto();

    userNew.firstName = userDto.firstName;
    userNew.lastName = userDto.lastName;
    userNew.userName = userDto.userName;
    userNew.email = userDto.email;

    userNew.accountType = await this.accountTypeService.findOneType('User');

    let userEntity = await this.accountService.save(userNew);

    credential.account = userEntity;
    credential.credential = userDto.password;
    credential.isActive = true;

    await this.credentialService.save(credential);

    userResDto.id = userEntity.id;
    userResDto.email = userEntity.email;
    userResDto.firstName = userEntity.firstName;
    userResDto.lastName = userEntity.lastName;
    userResDto.userName = userEntity.userName;

    return userResDto;
  }
}
