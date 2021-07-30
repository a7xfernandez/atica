import { Test, TestingModule } from '@nestjs/testing';
import { AccountsProfilesService } from './accounts-profiles.service';

describe('AccountsProfilesService', () => {
  let service: AccountsProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsProfilesService],
    }).compile();

    service = module.get<AccountsProfilesService>(AccountsProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
