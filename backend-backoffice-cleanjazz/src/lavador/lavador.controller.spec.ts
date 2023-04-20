import { Test, TestingModule } from '@nestjs/testing';
import { LavadorController } from './lavador.controller';

describe('LavadorController', () => {
  let controller: LavadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LavadorController],
    }).compile();

    controller = module.get<LavadorController>(LavadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
