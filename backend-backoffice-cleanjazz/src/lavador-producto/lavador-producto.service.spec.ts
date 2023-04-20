import { Test, TestingModule } from '@nestjs/testing';
import { LavadorProductoService } from './lavador-producto.service';

describe('LavadorProductoService', () => {
  let service: LavadorProductoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LavadorProductoService],
    }).compile();

    service = module.get<LavadorProductoService>(LavadorProductoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
