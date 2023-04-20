import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { LavadorProductoService } from './lavador-producto.service';
import { CreateLavadorProductoDto } from './dto/create-lavador-producto.dto';
import { UpdateLavadorProductoDto } from './dto/update-lavador-producto.dto';

@Controller('lavador-producto')
export class LavadorProductoController {

    constructor(private lavadorProductoService: LavadorProductoService) { }

    //metodo para insertar un registro en la tabla lavadorProducto
    
    @Post()
    createlavadorProducto(@Body() newlavadorProducto: CreateLavadorProductoDto) {
        return this.lavadorProductoService.create(newlavadorProducto)
    }

    //metodo para listar todos los registros de la tabla lavadorProducto
    @Get()
    getlavadorProducto(){
        return this.lavadorProductoService.findAll()
    }

    //metodo para listar un registro de la tabla lavadorProducto mediante el id del producto y el lavador
    @Get('/:productoId/:lavadorId')
    getOnelavadorProducto(@Param('productoId', ParseIntPipe) productoId: number, @Param('lavadorId', ParseIntPipe) lavadorId: number){
        return this.lavadorProductoService.findOne(productoId, lavadorId)
    }
    
    //metodo para actualizar un registro de la tabla lavadorProducto mediante el id del producto y del lavador
    @Patch('/:productoId/:lavadorId')
    updatelavadorProducto(@Param('productoId', ParseIntPipe) productoId: number, @Param('lavadorId', ParseIntPipe) lavadorId: number, @Body() lavadorProducto: UpdateLavadorProductoDto){
        return this.lavadorProductoService.update(productoId, lavadorId, lavadorProducto)

    }
}
