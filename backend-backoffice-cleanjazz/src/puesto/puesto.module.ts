import { Module } from '@nestjs/common';
import { PuestoController } from './puesto.controller';
import { PuestoService } from './puesto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Puesto } from './puesto.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Puesto])],
  controllers: [PuestoController],
  providers: [PuestoService]
})
export class PuestoModule {}
