import { Test, TestingModule } from '@nestjs/testing';
import { AccountCredentialService } from './account-credential.service';

describe('AccountCredentialService', () => {
  let service: AccountCredentialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountCredentialService],
    }).compile();

    service = module.get<AccountCredentialService>(AccountCredentialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
