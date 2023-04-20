import { GrupoService } from './grupo.service';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { CreateGrupoDto } from './dto/create-grupo.dto';
export declare class GrupoController {
    private grupoService;
    constructor(grupoService: GrupoService);
    getGrupos(): Promise<import("@nestjs/common").HttpException | import("./grupo.entity").grupo[]>;
    updateGrupo(id: number, grupo: UpdateGrupoDto): Promise<import("@nestjs/common").HttpException | (import("./grupo.entity").grupo & UpdateGrupoDto)>;
    getGrupo(id: number): Promise<import("@nestjs/common").HttpException | import("./grupo.entity").grupo>;
    createGrupo(newGrupo: CreateGrupoDto): Promise<import("@nestjs/common").HttpException | import("./grupo.entity").grupo>;
}
