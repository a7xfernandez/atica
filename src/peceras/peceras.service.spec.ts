import { Test, TestingModule } from '@nestjs/testing';
import { PecerasService } from './peceras.service';

describe('PecerasService', () => {
  let service: PecerasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PecerasService],
    }).compile();

    service = module.get<PecerasService>(PecerasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
