import { Module } from '@nestjs/common';
import { GuardiaController } from './guardia.controller';
import { GuardiaService } from './guardia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { guardia } from './guardia.entity';
@Module({

  imports: [TypeOrmModule.forFeature([guardia])],

  controllers: [GuardiaController],
  providers: [GuardiaService]
})
export class GuardiaModule {}
