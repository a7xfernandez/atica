import { Test, TestingModule } from '@nestjs/testing';
import { ShipmentAddressesController } from './shipment-addresses.controller';
import { ShipmentAddressesService } from './shipment-addresses.service';

describe('ShipmentAddressesController', () => {
  let controller: ShipmentAddressesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShipmentAddressesController],
      providers: [ShipmentAddressesService],
    }).compile();

    controller = module.get<ShipmentAddressesController>(ShipmentAddressesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
