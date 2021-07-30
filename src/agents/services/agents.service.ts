import { Injectable } from '@nestjs/common';
import { AccountsCredentialsService } from 'src/accounts-credentials/services/accounts-credentials.service';
import { AccountsTypesService } from 'src/accounts-types/services/accounts-types.service';
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
  
  create(createAgentDto: CreateAgentDto) {
    return 'This action adds a new agent';
  }

  async findAll(offset: number, take: number) {
    let typeEntity = await this.accountTypeService.findOneByUserType('Client');
    return await this.accountService.findAll(offset, take, typeEntity);
  }
}
