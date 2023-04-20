import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Puesto } from './puesto.entity';
import { CreatePuestoDto } from './dto/create-puesto.dto';
import { UpdatePuestoDto } from './dto/update-puesto.dto';
@Injectable()
export class PuestoService {

    constructor( @InjectRepository(Puesto) private userRepository: Repository<Puesto>   ) { }

    //metodo para insertar puesto con httpException
    async createPuesto(puesto: CreatePuestoDto){
        const puestoFound = await this.userRepository.findOne({
            where: {
                nombrePuesto: puesto.nombrePuesto
            }
        })
        if(puestoFound){
            return new HttpException('Puesto already exists', HttpStatus.CONFLICT)
        }
        const newPuesto = this.userRepository.create(puesto)
        return this.userRepository.save(newPuesto)
    }

    //metodo para obtener todos los puestos con httpException
    async getPuestos(){
        const puestoFound = await this.userRepository.find()
        if(!puestoFound){
            return new HttpException('Puesto not found', HttpStatus.NOT_FOUND)
        }
        return puestoFound;
    }

    //metodo para obtener un puesto por id con httpException
    async getPuesto(id: number){
        const puestoFound = await this.userRepository.findOne({
            where: {
                id
            }
        })
        if(!puestoFound){
            return new HttpException('Puesto not found', HttpStatus.NOT_FOUND)
        }
        return puestoFound;
    }

    //metodo para update puesto con httpException
    async updatePuesto(id: number, puesto: UpdatePuestoDto){
        const puestoFound = await this.userRepository.findOne({
            where: {
                id
            }
        })
        if(!puestoFound){
            return new HttpException('Puesto not found', HttpStatus.NOT_FOUND)
        }
        const updatePuesto = Object.assign(puestoFound, puesto)
        return this.userRepository.save(updatePuesto)
    }

}
