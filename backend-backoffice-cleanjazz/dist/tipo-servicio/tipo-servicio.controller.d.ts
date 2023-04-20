import { UpdateTipoServicioDto } from './dto/update-tipo-servicio.dto';
import { CreateTipoServicioDto } from './dto/create-tipo-servicio.dto';
import { TipoServicioService } from './tipo-servicio.service';
export declare class TipoServicioController {
    private tipoServicioService;
    constructor(tipoServicioService: TipoServicioService);
    createTipoServicio(newtipoServicio: CreateTipoServicioDto): Promise<import("@nestjs/common").HttpException | import("./tipo-servicio.entity").TipoServicio>;
    getTipoServicios(): Promise<import("./tipo-servicio.entity").TipoServicio[]>;
    getTipoServicio(id: number): Promise<import("@nestjs/common").HttpException | import("./tipo-servicio.entity").TipoServicio>;
    deleteTipoServicio(id: number): Promise<import("@nestjs/common").HttpException | import("typeorm").DeleteResult>;
    updateTipoServicio(id: number, tipoServicio: UpdateTipoServicioDto): Promise<import("@nestjs/common").HttpException | (import("./tipo-servicio.entity").TipoServicio & UpdateTipoServicioDto)>;
}
