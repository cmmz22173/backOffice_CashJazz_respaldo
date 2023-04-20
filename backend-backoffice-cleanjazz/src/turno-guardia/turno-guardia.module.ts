import { Module } from '@nestjs/common';
import { TurnoGuardiaController } from './turno-guardia.controller';
import { TurnoGuardiaService } from './turno-guardia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TurnoGuardia } from './turno-guardia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TurnoGuardia])],
  controllers: [TurnoGuardiaController],
  providers: [TurnoGuardiaService]
})
export class TurnoGuardiaModule {}
