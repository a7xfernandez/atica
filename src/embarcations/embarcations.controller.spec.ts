import { Test, TestingModule } from '@nestjs/testing';
import { EmbarcationsController } from './embarcations.controller';
import { EmbarcationsService } from './embarcations.service';

describe('EmbarcationsController', () => {
  let controller: EmbarcationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmbarcationsController],
      providers: [EmbarcationsService],
    }).compile();

    controller = module.get<EmbarcationsController>(EmbarcationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
