import { ModeloService } from './modelo.service';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
export declare class ModeloController {
    private modeloService;
    constructor(modeloService: ModeloService);
    createModelo(newModelo: CreateModeloDto): Promise<import("@nestjs/common").HttpException | import("./modelo.entity").modelo>;
    updateModelo(id: number, modelo: UpdateModeloDto): Promise<import("@nestjs/common").HttpException | (import("./modelo.entity").modelo & UpdateModeloDto)>;
    getModelos(): Promise<import("@nestjs/common").HttpException | import("./modelo.entity").modelo[]>;
    getModelo(id: number): Promise<import("@nestjs/common").HttpException | import("./modelo.entity").modelo>;
}
