import { Test, TestingModule } from '@nestjs/testing';
import { PecerasController } from './peceras.controller';
import { PecerasService } from './peceras.service';

describe('PecerasController', () => {
  let controller: PecerasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PecerasController],
      providers: [PecerasService],
    }).compile();

    controller = module.get<PecerasController>(PecerasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
