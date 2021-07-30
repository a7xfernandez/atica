import { Test, TestingModule } from '@nestjs/testing';
import { AccountsProfilesController } from './accounts-profiles.controller';
import { AccountsProfilesService } from './services/accounts-profiles.service';

describe('AccountsProfilesController', () => {
  let controller: AccountsProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountsProfilesController],
      providers: [AccountsProfilesService],
    }).compile();

    controller = module.get<AccountsProfilesController>(AccountsProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
