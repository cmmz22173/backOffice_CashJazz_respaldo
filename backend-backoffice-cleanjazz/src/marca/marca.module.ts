import { Module } from '@nestjs/common';
import { MarcaController } from './marca.controller';
import { MarcaService } from './marca.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import  { marca } from './marca.entity';
@Module({
  imports: [TypeOrmModule.forFeature([marca])],
  controllers: [MarcaController],
  providers: [MarcaService]
})
export class MarcaModule {}
