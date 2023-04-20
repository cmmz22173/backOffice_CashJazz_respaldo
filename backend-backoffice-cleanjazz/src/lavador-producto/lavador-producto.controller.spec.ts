import { Test, TestingModule } from '@nestjs/testing';
import { LavadorProductoController } from './lavador-producto.controller';

describe('LavadorProductoController', () => {
  let controller: LavadorProductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LavadorProductoController],
    }).compile();

    controller = module.get<LavadorProductoController>(LavadorProductoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
