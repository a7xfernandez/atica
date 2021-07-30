import { Injectable } from '@nestjs/common';
import { AccountsCredentialsService } from 'src/accounts-credentials/services/accounts-credentials.service';
import { AccountsTypesService } from 'src/accounts-types/services/accounts-types.service';
import { AccountsService } from 'src/accounts/services/accounts.service';
import { CommonService } from 'src/common/services/common.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private accountService: AccountsService,
    private credentialService: AccountsCredentialsService,
    private accountTypeService: AccountsTypesService,
    private commonService: CommonService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
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
