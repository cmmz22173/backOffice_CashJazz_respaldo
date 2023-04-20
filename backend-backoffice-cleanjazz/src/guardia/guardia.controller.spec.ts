import { Test, TestingModule } from '@nestjs/testing';
import { GuardiaController } from './guardia.controller';

describe('GuardiaController', () => {
  let controller: GuardiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuardiaController],
    }).compile();

    controller = module.get<GuardiaController>(GuardiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
