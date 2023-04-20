import { PuestoService } from './puesto.service';
import { CreatePuestoDto } from './dto/create-puesto.dto';
import { UpdatePuestoDto } from './dto/update-puesto.dto';
export declare class PuestoController {
    private puestoService;
    constructor(puestoService: PuestoService);
    createPuesto(newPuesto: CreatePuestoDto): Promise<import("@nestjs/common").HttpException | import("./puesto.entity").Puesto>;
    getPuestos(): Promise<import("@nestjs/common").HttpException | import("./puesto.entity").Puesto[]>;
    getPuesto(id: number): Promise<import("@nestjs/common").HttpException | import("./puesto.entity").Puesto>;
    updatePuesto(id: number, puesto: UpdatePuestoDto): Promise<import("@nestjs/common").HttpException | (import("./puesto.entity").Puesto & UpdatePuestoDto)>;
}
