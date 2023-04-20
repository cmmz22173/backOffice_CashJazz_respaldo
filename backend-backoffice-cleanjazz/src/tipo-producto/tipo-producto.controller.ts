import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UpdateTipoProductoDto } from './dto/update-tipo-producto.dto';
import { TipoProductoService } from './tipo-producto.service';
import { CreateTipoProductoDto } from './dto/create-tipo-producto.dto';
import { TipoProducto } from './tipo-producto.entity';

@Controller('tipo-producto')
export class TipoProductoController {

    constructor(private tipoProductoService: TipoProductoService) { }
    //metodo para insertar tipoProductos
    @Post()
    createtipoProducto(@Body() newtipoProducto: CreateTipoProductoDto) {
        return this.tipoProductoService.createTipoProducto(newtipoProducto)
    }

    //metodo para obtener todos los tipoProductos
    @Get()
    gettipoProductos(): Promise<TipoProducto[]> {
        return this.tipoProductoService.getTipoProductos()
    }

    //metodo para obtener un tipoProducto por id
    @Get(':id')
    gettipoProducto(@Param('id', ParseIntPipe) id: number) {
        return this.tipoProductoService.getTipoProducto(id)
    }


    //metodo para actualizar tipoProducto
    @Patch(':id')
    updatetipoProducto(@Param('id', ParseIntPipe) id: number, @Body() tipoProducto: UpdateTipoProductoDto) {
        return this.tipoProductoService.updateTipoProducto(id, tipoProducto)

    }
}
