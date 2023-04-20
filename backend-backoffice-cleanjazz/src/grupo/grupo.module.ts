import { Module } from '@nestjs/common';
import { GrupoController } from './grupo.controller';
import { GrupoService } from './grupo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { grupo } from './grupo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([grupo])],
  controllers: [GrupoController],
  providers: [GrupoService]
})
export class GrupoModule {}
