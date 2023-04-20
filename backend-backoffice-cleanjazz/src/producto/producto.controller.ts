import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { createProductoDto } from './dto/create-producto.dto';
import { Producto } from './producto.entity';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('productos')
export class ProductoController {

    constructor(private productoService: ProductoService) { }
    //metodo para insertar usuarios
    @Post()
    createproducto(@Body() newproducto: createProductoDto) {
        return this.productoService.createProducto(newproducto)
    }

    //metodo para obtener todos los usuarios
    @Get()
    getProductos() {
        return this.productoService.getProductos()
    }

    //metodo para obtener un usuario por id
    @Get(':id')
    getproducto(@Param('id', ParseIntPipe) id: number) {
        return this.productoService.getproducto(id)
    }

    //metodo para borrar Usuario
    @Delete(':id')
    deleteproducto(@Param('id', ParseIntPipe) id: number) {
        return this.productoService.deleteproducto(id)
    }

    //metodo para actualizar Usuario
    @Patch(':id')
    updateproducto(@Param('id', ParseIntPipe) id: number, @Body() producto: UpdateProductoDto) {
        return this.productoService.updateProducto(id, producto)

    }
}
