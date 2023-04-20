import { Test, TestingModule } from '@nestjs/testing';
import { GuardiaService } from './guardia.service';

describe('GuardiaService', () => {
  let service: GuardiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuardiaService],
    }).compile();

    service = module.get<GuardiaService>(GuardiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
