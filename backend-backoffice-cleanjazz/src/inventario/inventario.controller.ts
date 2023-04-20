import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { Inventario } from './inventario.entity';
import { InventarioService } from './inventario.service';

@Controller('inventario')
export class InventarioController {

    constructor(private InventarioService: InventarioService) { }
    //metodo para insertar usuarios
    @Post()
    createInventario(@Body() newInventario: CreateInventarioDto) {
        return this.InventarioService.createInventario(newInventario)
    }

    //metodo para obtener todos los usuarios
    @Get()
    getInventarios(): Promise<Inventario[]> {
        return this.InventarioService.getInventarios()
    }

    //metodo para obtener un usuario por id
    @Get(':id')
    getInventario(@Param('id', ParseIntPipe) id: number) {
        return this.InventarioService.getInventario(id)
    }


    //metodo para actualizar Usuario
    @Patch(':id')
    updateInventario(@Param('id', ParseIntPipe) id: number, @Body() Inventario: UpdateInventarioDto) {
        return this.InventarioService.updateInventario(id, Inventario)

    }
}
