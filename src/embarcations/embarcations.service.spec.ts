import { Test, TestingModule } from '@nestjs/testing';
import { EmbarcationsService } from './embarcations.service';

describe('EmbarcationsService', () => {
  let service: EmbarcationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmbarcationsService],
    }).compile();

    service = module.get<EmbarcationsService>(EmbarcationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
