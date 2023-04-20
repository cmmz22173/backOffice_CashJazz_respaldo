import { CreateAdministrativoDto } from './dto/create-administrativo.dto';
import { UpdateAdministrativoDto } from './dto/update-administrativo.dto';
import { AdministrativoService } from './administrativo.service';
export declare class AdministrativoController {
    private administrativoService;
    constructor(administrativoService: AdministrativoService);
    createadministrativo(administrativo: CreateAdministrativoDto): Promise<import("@nestjs/common").HttpException | import("./administrativo.entity").Administrativo>;
    getTurnosGuardia(): Promise<import("@nestjs/common").HttpException | import("./administrativo.entity").Administrativo[]>;
    getadministrativo(id: number): Promise<import("@nestjs/common").HttpException | import("./administrativo.entity").Administrativo>;
    updateadministrativo(id: number, administrativo: UpdateAdministrativoDto): Promise<import("@nestjs/common").HttpException | (import("./administrativo.entity").Administrativo & UpdateAdministrativoDto)>;
}
