import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { CreateMarcaDto } from './dto/create_marca.dto';
import { UpdateMarcaDto } from './dto/update_marca.dto';


@Controller('marcas')
export class MarcaController {

    constructor( private marcaService: MarcaService) { }


    //metodo para insertar marca
    @Post()
    createMarca(@Body() newMarca: CreateMarcaDto) {
        return this.marcaService.createMarca(newMarca)
    }


    //metodo para actualizar marca
    @Patch(':id')
    updateMarca(@Param('id', ParseIntPipe) id: number, @Body() marca: UpdateMarcaDto) {
        return this.marcaService.updateMarca(id, marca)
    }

    //metodo para obtener una marca
    @Get(':id')
    getMarca(@Param('id', ParseIntPipe) id: number) {
        return this.marcaService.getMarca(id)
    }
    
    //metodo para obtener todas las marcas
    @Get()
    getMarcas() {
        return this.marcaService.getMarcas()
    }
    
    
}
