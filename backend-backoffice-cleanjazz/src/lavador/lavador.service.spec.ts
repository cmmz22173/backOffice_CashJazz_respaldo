import { Test, TestingModule } from '@nestjs/testing';
import { LavadorService } from './lavador.service';

describe('LavadorService', () => {
  let service: LavadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LavadorService],
    }).compile();

    service = module.get<LavadorService>(LavadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
