import { Test, TestingModule } from '@nestjs/testing';
import { PackageTypesController } from './package-types.controller';
import { PackageTypesService } from './package-types.service';

describe('PackageTypesController', () => {
  let controller: PackageTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackageTypesController],
      providers: [PackageTypesService],
    }).compile();

    controller = module.get<PackageTypesController>(PackageTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
