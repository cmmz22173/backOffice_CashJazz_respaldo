import { Module } from '@nestjs/common';
import { AdministrativoController } from './administrativo.controller';
import { AdministrativoService } from './administrativo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrativo } from './administrativo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Administrativo])],
  controllers: [AdministrativoController],
  providers: [AdministrativoService]
})
export class AdministrativoModule {}
