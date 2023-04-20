import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cliente } from './cliente.entity';
@Module({ 
  imports: [TypeOrmModule.forFeature([cliente])],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
