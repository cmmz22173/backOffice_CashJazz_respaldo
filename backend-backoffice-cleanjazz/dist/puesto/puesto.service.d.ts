import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Puesto } from './puesto.entity';
import { CreatePuestoDto } from './dto/create-puesto.dto';
import { UpdatePuestoDto } from './dto/update-puesto.dto';
export declare class PuestoService {
    private userRepository;
    constructor(userRepository: Repository<Puesto>);
    createPuesto(puesto: CreatePuestoDto): Promise<HttpException | Puesto>;
    getPuestos(): Promise<HttpException | Puesto[]>;
    getPuesto(id: number): Promise<HttpException | Puesto>;
    updatePuesto(id: number, puesto: UpdatePuestoDto): Promise<HttpException | (Puesto & UpdatePuestoDto)>;
}
