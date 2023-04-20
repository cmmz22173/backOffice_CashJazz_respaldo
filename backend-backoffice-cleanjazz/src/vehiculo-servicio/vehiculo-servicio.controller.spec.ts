import { Test, TestingModule } from '@nestjs/testing';
import { VehiculoServicioController } from './vehiculo-servicio.controller';

describe('VehiculoServicioController', () => {
  let controller: VehiculoServicioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiculoServicioController],
    }).compile();

    controller = module.get<VehiculoServicioController>(VehiculoServicioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
