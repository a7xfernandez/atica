import { Test, TestingModule } from '@nestjs/testing';
import { AccountsCredentialsController } from './accounts-credentials.controller';
import { AccountsCredentialsService } from './accounts-credentials.service';

describe('AccountsCredentialsController', () => {
  let controller: AccountsCredentialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountsCredentialsController],
      providers: [AccountsCredentialsService],
    }).compile();

    controller = module.get<AccountsCredentialsController>(AccountsCredentialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
