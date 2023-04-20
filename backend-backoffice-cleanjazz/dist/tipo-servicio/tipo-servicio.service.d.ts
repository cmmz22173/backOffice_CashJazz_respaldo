import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateTipoServicioDto } from './dto/update-tipo-servicio.dto';
import { CreateTipoServicioDto } from './dto/create-tipo-servicio.dto';
import { TipoServicio } from './tipo-servicio.entity';
export declare class TipoServicioService {
    private tipoServicioRepository;
    constructor(tipoServicioRepository: Repository<TipoServicio>);
    createTipoServicio(tipoServicio: CreateTipoServicioDto): Promise<HttpException | TipoServicio>;
    getTipoServicios(): Promise<TipoServicio[]>;
    getTipoServicio(id: number): Promise<HttpException | TipoServicio>;
    deleteTipoServicio(id: number): Promise<HttpException | import("typeorm").DeleteResult>;
    updateTipoServicio(id: number, tipoServicio: UpdateTipoServicioDto): Promise<HttpException | (TipoServicio & UpdateTipoServicioDto)>;
}
