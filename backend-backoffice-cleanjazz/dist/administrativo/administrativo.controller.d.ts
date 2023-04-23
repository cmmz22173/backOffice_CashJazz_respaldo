import { CreateAdministrativoDto } from './dto/create-administrativo.dto';
import { UpdateAdministrativoDto } from './dto/update-administrativo.dto';
import { AdministrativoService } from './administrativo.service';
import { JwtService } from '@nestjs/jwt';
export declare class AdministrativoController {
    private administrativoService;
    private jwtService;
    constructor(administrativoService: AdministrativoService, jwtService: JwtService);
    createadministrativo(administrativo: CreateAdministrativoDto): Promise<import("@nestjs/common").HttpException | import("./administrativo.entity").Administrativo>;
    getTurnosGuardia(): Promise<import("@nestjs/common").HttpException | import("./administrativo.entity").Administrativo[]>;
    getadministrativo(id: number): Promise<import("@nestjs/common").HttpException | import("./administrativo.entity").Administrativo>;
    updateadministrativo(id: number, administrativo: UpdateAdministrativoDto): Promise<import("@nestjs/common").HttpException | (import("./administrativo.entity").Administrativo & UpdateAdministrativoDto)>;
    login(credentials: {
        username: string;
        password: string;
    }): Promise<{
        accessToken: string;
    }>;
    getAdministrativosFullInfo(): Promise<import("./administrativo.entity").Administrativo[]>;
}
