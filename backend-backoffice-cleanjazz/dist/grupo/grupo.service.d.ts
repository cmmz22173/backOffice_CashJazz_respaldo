import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { grupo } from './grupo.entity';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
export declare class GrupoService {
    private grupoRepository;
    constructor(grupoRepository: Repository<grupo>);
    createGrupo(grupo: CreateGrupoDto): Promise<HttpException | grupo>;
    getGrupo(id: number): Promise<HttpException | grupo>;
    getGrupos(): Promise<HttpException | grupo[]>;
    updateGrupo(id: number, grupo: UpdateGrupoDto): Promise<HttpException | (grupo & UpdateGrupoDto)>;
}
