import { UpdateLavadorDto } from './dto/update-lavador.dto';
import { CreateLavadorDto } from './dto/create-lavador.dto';
import { LavadorService } from './lavador.service';
export declare class LavadorController {
    private lavadorService;
    constructor(lavadorService: LavadorService);
    createlavador(lavador: CreateLavadorDto): Promise<import("@nestjs/common").HttpException | import("./lavador.entity").Lavador>;
    getlavadors(): Promise<import("@nestjs/common").HttpException | import("./lavador.entity").Lavador[]>;
    getlavador(id: number): Promise<import("@nestjs/common").HttpException | import("./lavador.entity").Lavador>;
    updatelavador(id: number, lavador: UpdateLavadorDto): Promise<import("@nestjs/common").HttpException | (import("./lavador.entity").Lavador & UpdateLavadorDto)>;
}
