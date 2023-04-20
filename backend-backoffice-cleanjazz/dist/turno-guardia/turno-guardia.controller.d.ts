import { TurnoGuardiaService } from './turno-guardia.service';
import { createTurnoGuardiaDto } from './dto/createTurnoGuardia.dto';
import { updateTurnoGuardiaDto } from './dto/updateTurnoGuartia.dto';
export declare class TurnoGuardiaController {
    private turnoGuardiaService;
    constructor(turnoGuardiaService: TurnoGuardiaService);
    createTurnoGuardia(turnoGuardia: createTurnoGuardiaDto): Promise<import("@nestjs/common").HttpException | import("./turno-guardia.entity").TurnoGuardia>;
    getTurnosGuardia(): Promise<import("@nestjs/common").HttpException | import("./turno-guardia.entity").TurnoGuardia[]>;
    getTurnoGuardia(id: number): Promise<import("@nestjs/common").HttpException | import("./turno-guardia.entity").TurnoGuardia>;
    updateTurnoGuardia(id: number, turnoGuardia: updateTurnoGuardiaDto): Promise<import("@nestjs/common").HttpException | (import("./turno-guardia.entity").TurnoGuardia & updateTurnoGuardiaDto)>;
}
