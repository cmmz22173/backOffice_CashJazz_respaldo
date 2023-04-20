import { ServicioService } from './servicio.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { Servicio } from './servicio.entity';
export declare class ServicioController {
    private servicioService;
    constructor(servicioService: ServicioService);
    createServicio(newServicio: CreateServicioDto): Promise<import("@nestjs/common").HttpException | Servicio>;
    getServicios(): Promise<Servicio[]>;
    getServicio(id: number): Promise<import("@nestjs/common").HttpException | Servicio>;
    deleteServicio(id: number): Promise<import("@nestjs/common").HttpException | Servicio>;
    updateServicio(id: number, servicio: UpdateServicioDto): Promise<import("@nestjs/common").HttpException | (Servicio & UpdateServicioDto)>;
}
