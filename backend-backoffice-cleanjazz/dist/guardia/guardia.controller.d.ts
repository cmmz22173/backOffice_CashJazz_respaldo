import { GuardiaService } from './guardia.service';
import { CreateGuardiaDto } from './dto/create-guardia.dto';
export declare class GuardiaController {
    private guardiaService;
    constructor(guardiaService: GuardiaService);
    createGuardia(turnoGuardia: CreateGuardiaDto): Promise<import("@nestjs/common").HttpException | import("./guardia.entity").guardia>;
    getGuardias(): Promise<import("@nestjs/common").HttpException | import("./guardia.entity").guardia[]>;
    getGuardia(id: number): Promise<import("@nestjs/common").HttpException | import("./guardia.entity").guardia>;
    updateGuardia(id: number, guardia: CreateGuardiaDto): Promise<import("@nestjs/common").HttpException | (import("./guardia.entity").guardia & import("./dto/update-guardia.dto").updateGuardiaDto)>;
}
