import { Test, TestingModule } from '@nestjs/testing';
import { MedidoresController } from './medidores.controller';
import { MedidoresService } from './medidores.service';

describe('MedidoresController', () => {
  let controller: MedidoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedidoresController],
      providers: [MedidoresService],
    }).compile();

    controller = module.get<MedidoresController>(MedidoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
