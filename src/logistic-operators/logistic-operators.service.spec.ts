import { Test, TestingModule } from '@nestjs/testing';
import { LogisticOperatorsService } from './logistic-operators.service';

describe('LogisticOperatorsService', () => {
  let service: LogisticOperatorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogisticOperatorsService],
    }).compile();

    service = module.get<LogisticOperatorsService>(LogisticOperatorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
