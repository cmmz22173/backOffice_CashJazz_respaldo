import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicio } from './servicio.entity';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';

@Injectable()
export class ServicioService {
    constructor(@InjectRepository(Servicio) private servicioRepository: Repository<Servicio>) { }

    //metodo para insertar SERVICIOS con httpException
    async createServicio(servicio: CreateServicioDto){
        const servicioFound = await this.servicioRepository.findOne({
            where: {
                
            }
        })
        if(servicioFound){
            return new HttpException('servicio already exists', HttpStatus.CONFLICT)
        }
        const newservicio = this.servicioRepository.create(servicio)
        return this.servicioRepository.save(newservicio)
    }

    //metodo para obtener todos los SERVICIOS
    getServicios(){
        return this.servicioRepository.find()
    }

    //metodo para obtener un servicio por id con httpException
    async getServicio(id: number){
        const servicioFound = await this.servicioRepository.findOne({
            where: {
                id
            }
        })
        if(!servicioFound){
            return new HttpException('servicio not found', HttpStatus.NOT_FOUND)
        }
        return servicioFound;
    }

    //metodo para borrar servicio con httpException
    async deleteServicio(id: number){
        const servicioFound = await this.servicioRepository.findOne({
            where: {
                id
            }
        })
        if(!servicioFound){
            return new HttpException('servicio not found', HttpStatus.NOT_FOUND)
        }
        await this.servicioRepository.delete(id)
        return servicioFound;
    }

    //metodo para actualizar servicio con httpException

    async updateServicio(id: number, servicio: UpdateServicioDto){
        const servicioFound = await this.servicioRepository.findOne({
            where: {
                id
            }
        })
        if(!servicioFound){
            return new HttpException('servicio not found', HttpStatus.NOT_FOUND)
        }
        const updateservicio = Object.assign(servicioFound, servicio)
        return this.servicioRepository.save(updateservicio)

    }
}
