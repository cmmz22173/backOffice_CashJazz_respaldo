import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';

@Controller('empleados')
export class EmpleadoController { 

    constructor(private empleadoService: EmpleadoService) { }
    
    //metodo para insertar empleados 
    @Post()
    async createEmpleado(@Body() empleado: CreateEmpleadoDto){
        return this.empleadoService.createEmpleado(empleado)
    } 

    //metyodo para obtener todos los empleados
    @Get()
    async getEmpleados(){
        return this.empleadoService.getEmpleados()
    }

    //metodo para obtener un empleado por id
    @Get(':id')
    async getEmpleado(@Param('id') id: number){
        return this.empleadoService.getEmpleado(id)
    }


    //metodo para actualizar un empleado por id
    @Patch(':id')
    async updateEmpleado(@Param('id', ParseIntPipe) id, @Body() empleado: UpdateEmpleadoDto){
        return this.empleadoService.updateEmpleado(id, empleado)
    }
    
}
