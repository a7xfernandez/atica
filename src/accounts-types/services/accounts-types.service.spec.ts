import { Test, TestingModule } from '@nestjs/testing';
import { AccountsTypesService } from './accounts-types.service';

describe('AccountsTypesService', () => {
  let service: AccountsTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsTypesService],
    }).compile();

    service = module.get<AccountsTypesService>(AccountsTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
