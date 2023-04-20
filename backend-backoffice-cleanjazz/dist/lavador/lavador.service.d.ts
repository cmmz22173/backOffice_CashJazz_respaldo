import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateLavadorDto } from './dto/update-lavador.dto';
import { CreateLavadorDto } from './dto/create-lavador.dto';
import { Lavador } from './lavador.entity';
export declare class LavadorService {
    private lavadorRepository;
    constructor(lavadorRepository: Repository<Lavador>);
    createLavador(lavador: CreateLavadorDto): Promise<HttpException | Lavador>;
    getLavador(id: number): Promise<HttpException | Lavador>;
    getLavadors(): Promise<HttpException | Lavador[]>;
    updateLavador(id: number, lavador: UpdateLavadorDto): Promise<HttpException | (Lavador & UpdateLavadorDto)>;
}
