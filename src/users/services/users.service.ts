import { CreateAccountDto } from './../../accounts/dto/create-account.dto';
import { Account } from './../../accounts/entities/account.entity';
import { Injectable } from '@nestjs/common';
import { AccountsCredentialsService } from 'src/accounts-credentials/services/accounts-credentials.service';
import { AccountsTypesService } from 'src/accounts-types/services/accounts-types.service';
import { AccountsService } from 'src/accounts/services/accounts.service';
import { CommonService } from 'src/common/services/common.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { AccountsCredential } from 'src/accounts-credentials/entities/accounts-credential.entity';

@Injectable()
export class UsersService {
  constructor(
    private accountService: AccountsService,
    private credentialService: AccountsCredentialsService,
    private accountTypeService: AccountsTypesService,
    private commonService: CommonService,
  ) {}

  async create(createUserDto: CreateUserDto) {

    let accountType = await this.accountTypeService.findOneByUserType('User');
    let userNew = new CreateAccountDto(); 

    userNew.accountTypeId.id = accountType.id; 
    userNew.firstName = createUserDto.firstName;
    userNew.lastName = createUserDto.lastName;
    userNew.userName = createUserDto.userName;
    userNew.email = createUserDto.email;
    
    let userEntity = await this.accountService.create(userNew);
    let credential = new AccountsCredential();

    credential.account = userEntity;
    credential.credential = createUserDto.password;
    credential.isActive = true;

    await this.credentialService.create(credential);

    return userEntity;
  }

  async findAll(offset: number, take: number) {
    let typeEntity = await this.accountTypeService.findOneByUserType('User');
    return await this.accountService.findAll(
      offset,
      take,
      typeEntity,
    );
  }
}
