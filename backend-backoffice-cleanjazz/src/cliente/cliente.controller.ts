import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { createClienteDto } from './dto/create-cliente.dto';
import { updateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClienteController {

    constructor(private clienteService: ClienteService) { }

    //metodo para insertar cliente
    @Post()
    createCliente(@Body() newCliente: createClienteDto) {
        return this.clienteService.createCliente(newCliente)
    }

    //metodo para obtener un cliente por id
    @Get(':id')
    getCliente(@Param('id', ParseIntPipe) id: number) {
        return this.clienteService.getCliente(id)
    }

    //metodo para hacer soft delete de un cliente
    @Delete(':id')
    deleteCliente(@Param('id', ParseIntPipe) id: number) {
        return this.clienteService.deleteCliente(id)
    }

    //metodo para obtener todos los clientes
    @Get()
    getClientes() {
        return this.clienteService.getClientes()
    }

    //metodo para actualizar Cliente
    @Patch(':id')
    updateCliente(@Param('id', ParseIntPipe) id: number, @Body() cliente: updateClienteDto) {
        return this.clienteService.updateCliente(id, cliente)
    }
}
