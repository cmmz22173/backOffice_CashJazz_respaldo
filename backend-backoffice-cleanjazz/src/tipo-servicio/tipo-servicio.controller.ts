import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UpdateTipoServicioDto } from './dto/update-tipo-servicio.dto';
import { CreateTipoServicioDto } from './dto/create-tipo-servicio.dto';
import { TipoServicioService } from './tipo-servicio.service';

@Controller('tipo-servicio')
export class TipoServicioController {

    constructor(private tipoServicioService: TipoServicioService) { }
    //metodo para insertar tipoServicios
    @Post()
    createTipoServicio(@Body() newtipoServicio: CreateTipoServicioDto) {
        return this.tipoServicioService.createTipoServicio(newtipoServicio)
    }

    //metodo para obtener todos los tipoServicios
    @Get()
    getTipoServicios() {
        return this.tipoServicioService.getTipoServicios()
    }

    //metodo para obtener un tipoServicio por id
    @Get(':id')
    getTipoServicio(@Param('id', ParseIntPipe) id: number) {
        return this.tipoServicioService.getTipoServicio(id)
    }

    //metodo para borrar tipoServicio
    @Delete(':id')
    deleteTipoServicio(@Param('id', ParseIntPipe) id: number) {
        return this.tipoServicioService.deleteTipoServicio(id)
    }

    //metodo para actualizar tipoServicio
    @Patch(':id')
    updateTipoServicio(@Param('id', ParseIntPipe) id: number, @Body() tipoServicio: UpdateTipoServicioDto) {
        return this.tipoServicioService.updateTipoServicio(id, tipoServicio)

    }
}
