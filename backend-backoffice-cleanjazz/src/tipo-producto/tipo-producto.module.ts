import { Module } from '@nestjs/common';
import { TipoProductoController } from './tipo-producto.controller';
import { TipoProductoService } from './tipo-producto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoProducto } from './tipo-producto.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TipoProducto])],
  controllers: [TipoProductoController],
  providers: [TipoProductoService]
})
export class TipoProductoModule {}
