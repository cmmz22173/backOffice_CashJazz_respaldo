import { Module } from '@nestjs/common';
import { ModeloController } from './modelo.controller';
import { ModeloService } from './modelo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { modelo } from './modelo.entity';
@Module({
  imports: [TypeOrmModule.forFeature([modelo])],
  controllers: [ModeloController],
  providers: [ModeloService]
})
export class ModeloModule {}
