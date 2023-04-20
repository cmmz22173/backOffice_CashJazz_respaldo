import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { empleado } from './empleado.entity';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';

@Injectable()
export class EmpleadoService {

    constructor(@InjectRepository(empleado) private empleadoRepository: Repository <empleado>) { }

    //metodo para insertar empleados con HTTPException
    async createEmpleado(empleado: CreateEmpleadoDto){
        const empleadoFound = await this.empleadoRepository.findOne({
            where: {
                dni: empleado.dni
    }
        })
        if(empleadoFound){
            return new HttpException('Empleado already exists', HttpStatus.CONFLICT)
        }
        const newEmpleado = this.empleadoRepository.create(empleado)
        return this.empleadoRepository.save(newEmpleado)
    }

    //metodo para obtener todos los empleados con httpException
    async getEmpleados(){
        const empleadoFound = await this.empleadoRepository.find()
        if(!empleadoFound){
            return new HttpException('Empleado not found', HttpStatus.NOT_FOUND)
        }
        return empleadoFound;
    }

    //metodo para obtener un empleado por id con httpException
    async getEmpleado(id: number){
        const empleadoFound = await this.empleadoRepository.findOne({
            where: {
                id
            }
        })
        if(!empleadoFound){
            return new HttpException('Empleado not found', HttpStatus.NOT_FOUND)
        }
        return empleadoFound;
    }

    //metodo para actualizar un empleado por id con httpException
    async updateEmpleado(id: number, empleado: UpdateEmpleadoDto){
        const empleadoFound = await this.empleadoRepository.findOne({
            where: {
                id
            }
        })
        if(!empleadoFound){
            return new HttpException('Empleado not found', HttpStatus.NOT_FOUND)
        }
        
        const updateUser = Object.assign(empleadoFound, empleado)
        return this.empleadoRepository.save(updateUser)

    }   
}