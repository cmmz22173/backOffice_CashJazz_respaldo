import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Administrativo } from './administrativo.entity';
import { CreateAdministrativoDto } from './dto/create-administrativo.dto';
import { UpdateAdministrativoDto } from './dto/update-administrativo.dto';
export declare class AdministrativoService {
    private administrativoRepository;
    constructor(administrativoRepository: Repository<Administrativo>);
    createadministrativo(administrativo: CreateAdministrativoDto): Promise<HttpException | Administrativo>;
    getadministrativo(id: number): Promise<HttpException | Administrativo>;
    getTurnosGuardia(): Promise<HttpException | Administrativo[]>;
    updateadministrativo(id: number, administrativo: UpdateAdministrativoDto): Promise<HttpException | (Administrativo & UpdateAdministrativoDto)>;
    findOne(usuario: string): Promise<Administrativo>;
    getAdministrativosFullInfo(): Promise<Administrativo[]>;
}
