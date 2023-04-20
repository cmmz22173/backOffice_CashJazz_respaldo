import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { marca } from './marca.entity';
import { CreateMarcaDto } from './dto/create_marca.dto';
import { UpdateMarcaDto } from './dto/update_marca.dto';
export declare class MarcaService {
    private marcaRepository;
    constructor(marcaRepository: Repository<marca>);
    createMarca(marca: CreateMarcaDto): Promise<HttpException | marca>;
    getMarcas(): Promise<HttpException | marca[]>;
    getMarca(id: number): Promise<HttpException | marca>;
    updateMarca(id: number, marca: UpdateMarcaDto): Promise<HttpException | (marca & UpdateMarcaDto)>;
}
