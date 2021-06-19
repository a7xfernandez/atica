import { Test, TestingModule } from '@nestjs/testing';
import { AccountProfileKeysService } from './account-profile-keys.service';

describe('AccountProfileKeysService', () => {
  let service: AccountProfileKeysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountProfileKeysService],
    }).compile();

    service = module.get<AccountProfileKeysService>(AccountProfileKeysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
