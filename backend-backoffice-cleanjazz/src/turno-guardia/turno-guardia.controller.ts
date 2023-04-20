import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TurnoGuardiaService } from './turno-guardia.service';
import { createTurnoGuardiaDto } from './dto/createTurnoGuardia.dto';
import { updateTurnoGuardiaDto } from './dto/updateTurnoGuartia.dto';

@Controller('turno-guardia')
export class TurnoGuardiaController {
    constructor(private turnoGuardiaService: TurnoGuardiaService) {}

    //para crear turno_guardia
    @Post()
    async createTurnoGuardia(@Body() turnoGuardia: createTurnoGuardiaDto){
        return await this.turnoGuardiaService.createTurnoGuardia(turnoGuardia)
    }
    //para obtener todos los turnos_guardia
    @Get()
    async getTurnosGuardia(){
        return await this.turnoGuardiaService.getTurnosGuardia()
    }
    //para obtener un turno_guardia por id
    @Get("id")
    async getTurnoGuardia(@Param("id", ParseIntPipe) id: number){
        return await this.turnoGuardiaService.getTurnoGuardia(id)
    }

    //para actualizar turno_guardia
    @Patch("id")
    async updateTurnoGuardia(@Param("id", ParseIntPipe) id: number, @Body() turnoGuardia: updateTurnoGuardiaDto){
        return await this.turnoGuardiaService.updateTurnoGuardia(id, turnoGuardia)
    }
    

}
