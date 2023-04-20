import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PuestoService } from './puesto.service';
import { CreatePuestoDto } from './dto/create-puesto.dto';
import { UpdatePuestoDto } from './dto/update-puesto.dto';

@Controller('puestos')
export class PuestoController {

    constructor( private puestoService:  PuestoService  ) { }

    //metodo para insertar puesto post
    @Post()
    createPuesto(@Body () newPuesto: CreatePuestoDto) {
        return this.puestoService.createPuesto(newPuesto)
    }

    //metodo para obtener todos los puestos get
    @Get()
    getPuestos() {
        return this.puestoService.getPuestos()
    }

    //metodo para obtener un puesto por id get
    @Get(":id")
    getPuesto(@Param('id', ParseIntPipe) id: number) {
        return this.puestoService.getPuesto(id)
    }

    //metodo para update puesto patch
    @Patch(":id")
    updatePuesto(@Param ('id', ParseIntPipe) id: number, @Body() puesto: UpdatePuestoDto) {
        return this.puestoService.updatePuesto(id, puesto)
    }
    
}
