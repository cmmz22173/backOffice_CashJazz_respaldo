import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';

@Controller('modelos')
export class ModeloController {

    constructor(private modeloService: ModeloService) { }

    //metodo para crear modelo
    @Post()
    createModelo(@Body() newModelo: CreateModeloDto) {
        return this.modeloService.createModelo(newModelo)
    }

    //metodo para actualizar modelo
    @Patch(':id')
    updateModelo(@Param('id', ParseIntPipe) id: number, @Body() modelo: UpdateModeloDto) {
        return this.modeloService.updateModelo(id, modelo)
    }

    //metodo para obtener todos los modelos
    @Get()
    getModelos() {
        return this.modeloService.getModelos()
    }

    //metodo para obtener un modelo
    @Get(':id')
    getModelo(@Param('id', ParseIntPipe) id: number) {
        return this.modeloService.getModelo(id)
    }
    
  
    
}
