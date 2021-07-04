import { AccountTypeService } from './../../account-type/services/account-type.service';
import { CommonService } from './../../common/services/common.service';
import { UserCreateReqDto } from './../dto/user.create.request.dto';
import { AccountCredentialService } from './../../account-credential/services/account-credential.service';
import { AccountCredentialEntity } from './../../account-credential/models/account-credential.entity';
import { AccountEntity } from './../../account/models/account.entity';
import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/services/account.service';

import { UserResDto } from '../dto/user.response.dto';

@Injectable()
export class UsersService {
  constructor(
    private accountService: AccountService,
    private credentialService: AccountCredentialService,
    private accountTypeService:AccountTypeService,
    private commonService: CommonService,
  ) {}

  async create(userDto: UserCreateReqDto) {
    let userNew = new AccountEntity();
    let credential = new AccountCredentialEntity();
    let userResDto: UserResDto = new UserResDto();

    userNew.firstName = userDto.firstName;
    userNew.lastName = userDto.lastName;
    userNew.userName = userDto.userName;
    userNew.email = userDto.email;

    userNew.accountType =  await this.accountTypeService.findOneType("User");

    let userEntity = await this.accountService.save(userNew);

    credential.account = userEntity;
    credential.credential = userDto.password;
    credential.isActive = true;

    await this.createCredential(credential);

    userResDto.id = userEntity.id;
    userResDto.email = userEntity.email;
    userResDto.firstName = userEntity.firstName;
    userResDto.lastName = userEntity.lastName;
    userResDto.userName = userEntity.userName;

    return userResDto;
  }

  async createCredential(credential: AccountCredentialEntity) {
    credential.credential = await this.commonService.hashPassword(
      credential.credential,
    );
    await this.credentialService.save(credential);
    return credential;
  }



}
