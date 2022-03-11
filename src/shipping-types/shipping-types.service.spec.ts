import { Test, TestingModule } from '@nestjs/testing';
import { ShippingTypesService } from './shipping-types.service';

describe('ShippingTypesService', () => {
  let service: ShippingTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShippingTypesService],
    }).compile();

    service = module.get<ShippingTypesService>(ShippingTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
