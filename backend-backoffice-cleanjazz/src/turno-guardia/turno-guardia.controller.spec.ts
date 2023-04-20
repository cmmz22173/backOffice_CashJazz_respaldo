import { Test, TestingModule } from '@nestjs/testing';
import { TurnoGuardiaController } from './turno-guardia.controller';

describe('TurnoGuardiaController', () => {
  let controller: TurnoGuardiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TurnoGuardiaController],
    }).compile();

    controller = module.get<TurnoGuardiaController>(TurnoGuardiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
