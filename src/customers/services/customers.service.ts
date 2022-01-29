import { Injectable } from '@nestjs/common';
import { AccountsCredential } from 'src/accounts-credentials/entities/accounts-credential.entity';
import { AccountsCredentialsService } from 'src/accounts-credentials/services/accounts-credentials.service';
import { AccountsTypesService } from 'src/accounts-types/services/accounts-types.service';
import { CreateAccountDto } from 'src/accounts/dto/create-account.dto';
import { UpdateAccountDto } from 'src/accounts/dto/update-account.dto';
import { Account } from 'src/accounts/entities/account.entity';
import { AccountsService } from 'src/accounts/services/accounts.service';
import { AddressesService } from 'src/addresses/addresses.service';
import { CommonService } from 'src/common/services/common.service';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { customerPaginatedDto } from '../dto/customer-paginated-dto';
import { CustomerDto } from '../dto/CustomerDto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    private accountService: AccountsService,
    private credentialService: AccountsCredentialsService,
    private accountTypeService: AccountsTypesService,
    private addressService: AddressesService,
    private commonService: CommonService,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {

    let accountType = await this.accountTypeService.findOneByUserType('Client');
    let userNew = new CreateAccountDto();   

    userNew.accountTypeId = accountType;
    userNew.firstName = createCustomerDto.firstName;
    userNew.lastName = createCustomerDto.lastName;
    userNew.middleName = createCustomerDto.middleName;
    userNew.userName = createCustomerDto.userName;
    userNew.telephone = createCustomerDto.telephone;
    userNew.companyName = createCustomerDto.companyName;
    userNew.email = createCustomerDto.email;

    
    let userEntity = await this.accountService.create(userNew);
    let credential = new AccountsCredential();

    credential.account = userEntity;
    credential.credential = createCustomerDto.password;
    credential.isActive = true;    

    let credentials = await this.credentialService.create(credential);

    let address = await this.addressService.insertList(userEntity.id,createCustomerDto.addresses);

    return userEntity;
  }
  async update(id: number, createCustomerDto: UpdateCustomerDto) {

    let accountType = await this.accountTypeService.findOneByUserType('Client');
    let userNew = new Account();

    userNew.accountType = accountType;
    userNew.firstName = createCustomerDto.firstName;
    userNew.lastName = createCustomerDto.lastName;
    userNew.middleName = createCustomerDto.middleName;
    userNew.userName = createCustomerDto.userName;
    userNew.telephone = createCustomerDto.telephone;
    userNew.companyName = createCustomerDto.companyName;
    userNew.email = createCustomerDto.email;
    console.log(userNew);

    let updateResult = await this.accountService.update(id,userNew);
    console.log(updateResult);
    let userEntity = await this.accountService.findOne(id);
    let credential = new AccountsCredential();

    credential.account = userEntity;
    credential.credential = createCustomerDto.password;
    credential.isActive = true;

    let credentials = await this.credentialService.update(id,credential);

    console.log(createCustomerDto.addresses);
    if (createCustomerDto.addresses!=null) {
      let address = await this.addressService.updateList(createCustomerDto.addresses);      
    }
    

    return userEntity;
  }

  async findAll(offset: number, take: number) {
    let typeEntity = await this.accountTypeService.findOneByUserType('Client');
    //let users = await this.accountService.findAll(offset, take, typeEntity);
    let users = await this.accountService.getAll(typeEntity);
    let accountPaginated = this.paginateAccount(users,offset,take);

    let customersPaged = new customerPaginatedDto();

    customersPaged.CustomerCant = users.length;
    customersPaged.customers = accountPaginated;

    return customersPaged;
  }

  async findOne(id:number){    
    return this.accountService.findOne(id);    
  }

  async remove(id: number){
    return await this.accountService.remove(id);
  }

  paginateAccount(accountList:Account[], size:number, page:number)
  {
    return accountList.slice(size).slice(0,page);
  }
  
  toCustomer(account: Account)
  {
    let customer = new CustomerDto();
    customer.id = account.id;
    customer.firstName = account.firstName;
    customer.firstName = account.lastName;
    customer.userName = account.userName;  
    
    return customer;
  }
  toCustomers(accountList: Account[])
  { 
    let customers = new CustomerDto[accountList.length];   
    
    return customers;
  }
}