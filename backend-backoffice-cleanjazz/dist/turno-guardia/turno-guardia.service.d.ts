import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TurnoGuardia } from './turno-guardia.entity';
import { createTurnoGuardiaDto } from './dto/createTurnoGuardia.dto';
import { updateTurnoGuardiaDto } from './dto/updateTurnoGuartia.dto';
export declare class TurnoGuardiaService {
    private turnoGuardiaRepository;
    constructor(turnoGuardiaRepository: Repository<TurnoGuardia>);
    createTurnoGuardia(turnoGuardia: createTurnoGuardiaDto): Promise<HttpException | TurnoGuardia>;
    getTurnoGuardia(id: number): Promise<HttpException | TurnoGuardia>;
    getTurnosGuardia(): Promise<HttpException | TurnoGuardia[]>;
    updateTurnoGuardia(id: number, turnoGuardia: updateTurnoGuardiaDto): Promise<HttpException | (TurnoGuardia & updateTurnoGuardiaDto)>;
}
