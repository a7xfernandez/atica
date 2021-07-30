import { Test, TestingModule } from '@nestjs/testing';
import { AccountsTypesController } from './accounts-types.controller';
import { AccountsTypesService } from './services/accounts-types.service';

describe('AccountsTypesController', () => {
  let controller: AccountsTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountsTypesController],
      providers: [AccountsTypesService],
    }).compile();

    controller = module.get<AccountsTypesController>(AccountsTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
