import { Test, TestingModule } from '@nestjs/testing';
import { VehiculoServicioService } from './vehiculo-servicio.service';

describe('VehiculoServicioService', () => {
  let service: VehiculoServicioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiculoServicioService],
    }).compile();

    service = module.get<VehiculoServicioService>(VehiculoServicioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
