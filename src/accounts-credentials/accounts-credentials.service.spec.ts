import { Test, TestingModule } from '@nestjs/testing';
import { AccountsCredentialsService } from './accounts-credentials.service';

describe('AccountsCredentialsService', () => {
  let service: AccountsCredentialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsCredentialsService],
    }).compile();

    service = module.get<AccountsCredentialsService>(AccountsCredentialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
