import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { vehiculo } from './vehiculo.entity';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Injectable()
export class VehiculoService {

    constructor(@InjectRepository(vehiculo) private vehiculoRepository) { }

    //metodo para insertar vehiculos con httpException
    async createVehiculo(vehiculo: CreateVehiculoDto){
        const vehiculoFound = await this.vehiculoRepository.findOne({
            where: {
                placa: vehiculo.placa
            }
        })
        if(vehiculoFound){
            return new HttpException('Vehiculo already exists', HttpStatus.CONFLICT)
        }
        const newVehiculo = this.vehiculoRepository.create(vehiculo)
        return this.vehiculoRepository.save(newVehiculo)
    }

    //metodo para obtener todos los vehiculos con httpException
    async getVehiculos(){
        const vehiculoFound = await this.vehiculoRepository.find(
            {where: {estado: 'activo'}}
        )
        if(!vehiculoFound){
            return new HttpException('Vehiculos not found', HttpStatus.NOT_FOUND)
        }
        return vehiculoFound;
    }

    //metodo para obtener un vehiculo por id con httpException
    async getVehiculo(id: number){
        const vehiculoFound = await this.vehiculoRepository.findOne({
            where: {
                id
            }
        })
        if(!vehiculoFound){
            return new HttpException('Vehiculo not found', HttpStatus.NOT_FOUND)
        }
        return vehiculoFound;
    }

    //metodo para borrar vehiculo con httpException
    async deleteVehiculo(id: number){
        
        const vehiculoFound = await this.vehiculoRepository.findOne({
            where: {
                id}
        })
        if(!vehiculoFound){
            return new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        const softDelete = Object.assign(vehiculoFound, {estado: 'inactivo'})
        return this.vehiculoRepository.save(softDelete)
    }

    //metodo para actualizar vehiculo con httpException
    async updateVehiculo(id: number, vehiculo: UpdateVehiculoDto){
        const vehiculoFound = await this.vehiculoRepository.findOne({
            where: {
                id}
        })
        if(!vehiculoFound){
            return new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        const updateUser = Object.assign(vehiculoFound, vehiculo)
        return this.vehiculoRepository.save(updateUser)
    }
}
