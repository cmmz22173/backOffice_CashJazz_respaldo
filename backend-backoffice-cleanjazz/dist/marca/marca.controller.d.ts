import { MarcaService } from './marca.service';
import { CreateMarcaDto } from './dto/create_marca.dto';
import { UpdateMarcaDto } from './dto/update_marca.dto';
export declare class MarcaController {
    private marcaService;
    constructor(marcaService: MarcaService);
    createMarca(newMarca: CreateMarcaDto): Promise<import("@nestjs/common").HttpException | import("./marca.entity").marca>;
    updateMarca(id: number, marca: UpdateMarcaDto): Promise<import("@nestjs/common").HttpException | (import("./marca.entity").marca & UpdateMarcaDto)>;
    getMarca(id: number): Promise<import("@nestjs/common").HttpException | import("./marca.entity").marca>;
    getMarcas(): Promise<import("@nestjs/common").HttpException | import("./marca.entity").marca[]>;
}
