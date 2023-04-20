import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Servicio } from './servicio.entity';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
export declare class ServicioService {
    private servicioRepository;
    constructor(servicioRepository: Repository<Servicio>);
    createServicio(servicio: CreateServicioDto): Promise<HttpException | Servicio>;
    getServicios(): Promise<Servicio[]>;
    getServicio(id: number): Promise<HttpException | Servicio>;
    deleteServicio(id: number): Promise<HttpException | Servicio>;
    updateServicio(id: number, servicio: UpdateServicioDto): Promise<HttpException | (Servicio & UpdateServicioDto)>;
}
