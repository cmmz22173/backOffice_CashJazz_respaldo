import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateAdministrativoDto } from './dto/create-administrativo.dto';
import { UpdateAdministrativoDto } from './dto/update-administrativo.dto';
import { AdministrativoService } from './administrativo.service';
@Controller('administrativo')
export class AdministrativoController {

    constructor(private administrativoService: AdministrativoService) {}

    //para crear administrativo
    @Post()
    async createadministrativo(@Body() administrativo: CreateAdministrativoDto){
        return await this.administrativoService.createadministrativo(administrativo)
    }
    //para obtener todos los administrativos
    @Get()
    async getTurnosGuardia(){
        return await this.administrativoService.getTurnosGuardia()
    }
    //para obtener un administrativo por id
    @Get("id")
    async getadministrativo(@Param("id", ParseIntPipe) id: number){
        return await this.administrativoService.getadministrativo(id)
    }

    //para actualizar administrativo
    @Patch("id")
    async updateadministrativo(@Param("id", ParseIntPipe) id: number, @Body() administrativo: UpdateAdministrativoDto){
        return await this.administrativoService.updateadministrativo(id, administrativo)
    }
}
