import { Module } from '@nestjs/common';
import { LavadorProductoController } from './lavador-producto.controller';
import { LavadorProductoService } from './lavador-producto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { lavadorProducto } from './lavador-producto.entity';


@Module({
  imports: [TypeOrmModule.forFeature([lavadorProducto])],
  controllers: [LavadorProductoController],
  providers: [LavadorProductoService]
})
export class LavadorProductoModule {}
