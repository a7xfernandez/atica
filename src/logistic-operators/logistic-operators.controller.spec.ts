import { Test, TestingModule } from '@nestjs/testing';
import { LogisticOperatorsController } from './logistic-operators.controller';
import { LogisticOperatorsService } from './logistic-operators.service';

describe('LogisticOperatorsController', () => {
  let controller: LogisticOperatorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogisticOperatorsController],
      providers: [LogisticOperatorsService],
    }).compile();

    controller = module.get<LogisticOperatorsController>(LogisticOperatorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
