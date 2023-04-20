import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { Servicio } from './servicio.entity';

@Controller('servicios')
export class ServicioController {
    constructor(private servicioService: ServicioService) { }
    //metodo para insertar usuarios
    @Post()
    createServicio(@Body() newServicio: CreateServicioDto) {
        return this.servicioService.createServicio(newServicio)
    }

    //metodo para obtener todos los usuarios
    @Get()
    getServicios(): Promise<Servicio[]> {
        return this.servicioService.getServicios()
    }

    //metodo para obtener un usuario por id
    @Get(':id')
    getServicio(@Param('id', ParseIntPipe) id: number) {
        return this.servicioService.getServicio(id)
    }

    //metodo para borrar Usuario
    @Delete(':id')
    deleteServicio(@Param('id', ParseIntPipe) id: number) {
        return this.servicioService.deleteServicio(id)
    }

    //metodo para actualizar Usuario
    @Patch(':id')
    updateServicio(@Param('id', ParseIntPipe) id: number, @Body() servicio: UpdateServicioDto) {
        return this.servicioService.updateServicio(id, servicio)

    }
}
