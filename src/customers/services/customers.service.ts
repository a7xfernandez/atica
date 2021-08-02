import { Injectable } from '@nestjs/common';
import { AccountsCredential } from 'src/accounts-credentials/entities/accounts-credential.entity';
import { AccountsCredentialsService } from 'src/accounts-credentials/services/accounts-credentials.service';
import { AccountsTypesService } from 'src/accounts-types/services/accounts-types.service';
import { CreateAccountDto } from 'src/accounts/dto/create-account.dto';
import { AccountsService } from 'src/accounts/services/accounts.service';
import { CommonService } from 'src/common/services/common.service';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    private accountService: AccountsService,
    private credentialService: AccountsCredentialsService,
    private accountTypeService: AccountsTypesService,
    private commonService: CommonService,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {

    let accountType = await this.accountTypeService.findOneByUserType('Client');
    let userNew = new CreateAccountDto();

    userNew.accountTypeId = accountType;
    userNew.firstName = createCustomerDto.firstName;
    userNew.lastName = createCustomerDto.lastName;
    userNew.userName = createCustomerDto.userName;
    userNew.email = createCustomerDto.email;

    let userEntity = await this.accountService.create(userNew);
    let credential = new AccountsCredential();

    credential.account = userEntity;
    credential.credential = createCustomerDto.password;
    credential.isActive = true;

    let credentials = await this.credentialService.create(credential);

    return userEntity;
  }

  async findAll(offset: number, take: number) {
    let typeEntity = await this.accountTypeService.findOneByUserType('Client');
    let users = await this.accountService.findAll(offset, take, typeEntity);
    return users;
  }
}
