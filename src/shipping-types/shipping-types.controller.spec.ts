import { Test, TestingModule } from '@nestjs/testing';
import { ShippingTypesController } from './shipping-types.controller';
import { ShippingTypesService } from './shipping-types.service';

describe('ShippingTypesController', () => {
  let controller: ShippingTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShippingTypesController],
      providers: [ShippingTypesService],
    }).compile();

    controller = module.get<ShippingTypesController>(ShippingTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
