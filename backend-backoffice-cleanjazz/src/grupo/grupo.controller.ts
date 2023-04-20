import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { CreateGrupoDto } from './dto/create-grupo.dto';

@Controller('grupos')
export class GrupoController {

    constructor(private grupoService: GrupoService) { }
    //CONTROLADOR PARA MOSTRAR los grupos
    @Get()
    getGrupos() {
        return this.grupoService.getGrupos()
    }
    //metodo para actualizar Grupo
    @Patch(':id')
    updateGrupo(@Param('id', ParseIntPipe) id: number, @Body() grupo: UpdateGrupoDto) {
        return this.grupoService.updateGrupo(id, grupo)
    }

    //metodo para obtener un grupo
    @Get(':id')
    getGrupo(@Param('id', ParseIntPipe) id: number) {
        return this.grupoService.getGrupo(id)
    }
    
    //metodo para insertar grupo
    @Post()
    createGrupo(@Body() newGrupo: CreateGrupoDto) {
        return this.grupoService.createGrupo(newGrupo)
    }
}
