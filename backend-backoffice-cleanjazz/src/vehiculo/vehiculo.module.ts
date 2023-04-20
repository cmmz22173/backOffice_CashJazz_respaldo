import { Module } from '@nestjs/common';
import { VehiculoController } from './vehiculo.controller';
import { VehiculoService } from './vehiculo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { vehiculo } from './vehiculo.entity';
@Module({
  imports: [TypeOrmModule.forFeature([vehiculo])],
  controllers: [VehiculoController],
  providers: [VehiculoService]
})
export class VehiculoModule {}
