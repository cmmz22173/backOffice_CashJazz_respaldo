import { Module } from '@nestjs/common';
import { InventarioController } from './inventario.controller';
import { InventarioService } from './inventario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventario } from './inventario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inventario])],
  controllers: [InventarioController],
  providers: [InventarioService]
})
export class InventarioModule {}
