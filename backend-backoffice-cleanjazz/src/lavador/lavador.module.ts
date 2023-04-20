import { Module } from '@nestjs/common';
import { LavadorController } from './lavador.controller';
import { LavadorService } from './lavador.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lavador } from './lavador.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Lavador])],
  controllers: [LavadorController],
  providers: [LavadorService]
})
export class LavadorModule {}
