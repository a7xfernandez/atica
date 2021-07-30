import { Injectable } from '@nestjs/common';
import { AccountsCredentialsService } from 'src/accounts-credentials/services/accounts-credentials.service';
import { AccountsTypesService } from 'src/accounts-types/services/accounts-types.service';
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

  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  async findAll(offset: number, take: number) {
    let typeEntity = await this.accountTypeService.findOneByUserType('Client');
    return await this.accountService.findAll(offset, take, typeEntity);
  }
}
