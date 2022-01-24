import { Test, TestingModule } from '@nestjs/testing';
import { ShipmentAddressesService } from './shipment-addresses.service';

describe('ShipmentAddressesService', () => {
  let service: ShipmentAddressesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShipmentAddressesService],
    }).compile();

    service = module.get<ShipmentAddressesService>(ShipmentAddressesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
