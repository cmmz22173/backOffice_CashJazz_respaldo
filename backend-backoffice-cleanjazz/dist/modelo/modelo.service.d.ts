import { HttpException } from '@nestjs/common';
import { modelo } from './modelo.entity';
import { Repository } from 'typeorm';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { CreateModeloDto } from './dto/create-modelo.dto';
export declare class ModeloService {
    private modeloRepository;
    constructor(modeloRepository: Repository<modelo>);
    createModelo(modelo: CreateModeloDto): Promise<HttpException | modelo>;
    getModelo(id: number): Promise<HttpException | modelo>;
    getModelos(): Promise<HttpException | modelo[]>;
    updateModelo(id: number, modelo: UpdateModeloDto): Promise<HttpException | (modelo & UpdateModeloDto)>;
}
