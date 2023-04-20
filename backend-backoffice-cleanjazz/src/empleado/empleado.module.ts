import { Module } from '@nestjs/common';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoService } from './empleado.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { empleado } from './empleado.entity';
@Module({
  imports: [TypeOrmModule.forFeature([empleado])],
  controllers: [EmpleadoController],
  providers: [EmpleadoService]
})
export class EmpleadoModule {}
