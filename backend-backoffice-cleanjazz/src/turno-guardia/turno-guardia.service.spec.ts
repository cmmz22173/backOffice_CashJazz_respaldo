import { Test, TestingModule } from '@nestjs/testing';
import { TurnoGuardiaService } from './turno-guardia.service';

describe('TurnoGuardiaService', () => {
  let service: TurnoGuardiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TurnoGuardiaService],
    }).compile();

    service = module.get<TurnoGuardiaService>(TurnoGuardiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
