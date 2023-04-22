import { Module } from '@nestjs/common';
import { AdministrativoController } from './administrativo.controller';
import { AdministrativoService } from './administrativo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrativo } from './administrativo.entity';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    TypeOrmModule.forFeature([Administrativo]),
    JwtModule.register({
      secret: 'mysecretkey',
      signOptions: { expiresIn: '30m' },
    }),
  ],
  controllers: [AdministrativoController],
  providers: [AdministrativoService]
})
export class AdministrativoModule {}
