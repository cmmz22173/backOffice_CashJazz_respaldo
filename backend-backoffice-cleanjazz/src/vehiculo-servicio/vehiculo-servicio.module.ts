import { Module } from '@nestjs/common';
import { VehiculoServicioController } from './vehiculo-servicio.controller';
import { VehiculoServicioService } from './vehiculo-servicio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculoServico } from './vehiculo-servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehiculoServico ])  ],
  controllers: [VehiculoServicioController],
  providers: [VehiculoServicioService]
})
export class VehiculoServicioModule {}
