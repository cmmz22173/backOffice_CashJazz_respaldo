import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UpdateLavadorDto } from './dto/update-lavador.dto';
import { CreateLavadorDto } from './dto/create-lavador.dto';
import { LavadorService } from './lavador.service';

@Controller('lavador')
export class LavadorController {

    constructor(private lavadorService: LavadorService) {}

    //para crear lavador
    @Post()
    async createlavador(@Body() lavador: CreateLavadorDto){
        return await this.lavadorService.createLavador(lavador)
    }
    //para obtener todos los lavadores
    @Get()
    async getlavadors(){
        return await this.lavadorService.getLavadors()
    }
    //para obtener un lavador por id
    @Get("id")
    async getlavador(@Param("id", ParseIntPipe) id: number){
        return await this.lavadorService.getLavador(id)
    }

    //para actualizar lavador
    @Patch("id")
    async updatelavador(@Param("id", ParseIntPipe) id: number, @Body() lavador: UpdateLavadorDto){
        return await this.lavadorService.updateLavador(id, lavador)
    }
}
