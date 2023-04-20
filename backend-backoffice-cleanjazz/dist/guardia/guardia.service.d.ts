import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { guardia } from './guardia.entity';
import { CreateGuardiaDto } from './dto/create-guardia.dto';
import { updateGuardiaDto } from './dto/update-guardia.dto';
export declare class GuardiaService {
    private guardiaRepository;
    constructor(guardiaRepository: Repository<guardia>);
    createGuardia(Guardia: CreateGuardiaDto): Promise<HttpException | guardia>;
    getGuardia(id: number): Promise<HttpException | guardia>;
    getGuardias(): Promise<HttpException | guardia[]>;
    updateGuardia(id: number, guardia: updateGuardiaDto): Promise<HttpException | (guardia & updateGuardiaDto)>;
}
