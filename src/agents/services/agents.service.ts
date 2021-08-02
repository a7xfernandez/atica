import { Injectable } from '@nestjs/common';
import { AccountsCredential } from 'src/accounts-credentials/entities/accounts-credential.entity';
import { AccountsCredentialsService } from 'src/accounts-credentials/services/accounts-credentials.service';
import { AccountsTypesService } from 'src/accounts-types/services/accounts-types.service';
import { CreateAccountDto } from 'src/accounts/dto/create-account.dto';
import { AccountsService } from 'src/accounts/services/accounts.service';
import { CommonService } from 'src/common/services/common.service';
import { CreateAgentDto } from '../dto/create-agent.dto';
import { UpdateAgentDto } from '../dto/update-agent.dto';

@Injectable()
export class AgentsService {
  constructor(
    private accountService: AccountsService,
    private credentialService: AccountsCredentialsService,
    private accountTypeService: AccountsTypesService,
    private commonService: CommonService,
  ) {}
  
  async create(createAgentDto: CreateAgentDto) {
    let accountType = await this.accountTypeService.findOneByUserType('Agent');
    let userNew = new CreateAccountDto();

    userNew.accountTypeId = accountType;
    userNew.firstName = createAgentDto.firstName;
    userNew.lastName = createAgentDto.lastName;
    userNew.userName = createAgentDto.userName;
    userNew.email = createAgentDto.email;

    let userEntity = await this.accountService.create(userNew);
    let credential = new AccountsCredential();

    credential.account = userEntity;
    credential.credential = createAgentDto.password;
    credential.isActive = true;

    let credentials = await this.credentialService.create(credential);

    return userEntity;
  }

  async findAll(offset: number, take: number) {
    let typeEntity = await this.accountTypeService.findOneByUserType('Agent');
    let users = await this.accountService.findAll(offset, take, typeEntity);
    return users;
  }
}
