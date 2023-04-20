import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { GuardiaService } from './guardia.service';
import { CreateGuardiaDto } from './dto/create-guardia.dto';

@Controller('guardia')
export class GuardiaController {

    constructor(private guardiaService: GuardiaService) {}

    //para crear guardia
    @Post()
    async createGuardia(@Body() turnoGuardia: CreateGuardiaDto){
        return await this.guardiaService.createGuardia(turnoGuardia)
    }
    //para obtener todas las guardias
    @Get()
    async getGuardias(){
        return await this.guardiaService.getGuardias()
    }
    //para obtener un guardia por id
    @Get("id")
    async getGuardia(@Param("id", ParseIntPipe) id: number){
        return await this.guardiaService.getGuardia(id)
    }

    //para actualizar guardia
    @Patch("id")
    async updateGuardia(@Param("id", ParseIntPipe) id: number, @Body() guardia: CreateGuardiaDto){
        return await this.guardiaService.updateGuardia(id, guardia)
    }
}
